package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class TechnicianController {
	@Autowired
	private TechnicianService technicianservice;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/technician/{email}/{password}")
	public ResponseEntity<Technician> TechnicianLogin(@PathVariable("email") String email , @PathVariable("password") String password, HttpServletRequest request) {
		int flag = technicianservice.loginValidationTechnician(email, password);
		Integer result = flag;
		Technician technician= null;
		 if (result==1) {
		      HttpSession session = request.getSession(true);
		      session.setAttribute("email", email);
		      try {
		    	  technician = technicianservice.findTechnician(email, password);
				System.out.println(technician.getName());
				System.out.println(technician.getId());
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		      return ResponseEntity.ok(technician);
		    } else {
		      return ResponseEntity.badRequest().build();
		    }
				
		
	}

}
