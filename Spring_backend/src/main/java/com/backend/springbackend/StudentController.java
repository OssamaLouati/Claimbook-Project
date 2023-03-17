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
public class StudentController {
	@Autowired
	private UserService userservice;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/user/{email}/{password}")
	public ResponseEntity<Student> UserLogin(@PathVariable("email") String email1 , @PathVariable("password") String password1, HttpServletRequest request) {
		int flag = userservice.loginValidation(email1, password1);
		Integer result = flag;
		Student user= null;
		 if (result==1) {
		      HttpSession session = request.getSession(true);
		      session.setAttribute("email", email1);
		      try {
			     user = userservice.finduser(email1, password1);
				System.out.println(user.getName());
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		      return ResponseEntity.ok(user);
		    } else {
		      return ResponseEntity.badRequest().build();
		    }
				
		
	}
	@CrossOrigin(origins = "*")
	@PostMapping("user/logout")
	public ResponseEntity<?> logout(HttpServletRequest request) {
	    HttpSession session = request.getSession(false);
	    if (session != null) {
	      session.invalidate();
	    }
	    return ResponseEntity.ok().build();
	 }
	

}
