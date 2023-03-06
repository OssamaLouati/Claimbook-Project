package com.backend.springbackend;



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


@Controller
public class UserController {
	@Autowired
	private UserService userservice;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/user/{email}/{password}")
	public ResponseEntity<Integer> UserLogin(@PathVariable("email") String email1 , @PathVariable("password") String password1) {
		int flag = userservice.loginValidation(email1, password1);
		Integer result = flag;
		
		return ResponseEntity.ok(result);
		
	}
	

}
