package com.app.springbackend.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.springbackend.model.User;
import com.backend.springbackend.repo.UserRepo;


@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserRepo repo;
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser( @RequestBody User userData){		
		User optionalUser = repo.findByEmail(userData.getEmail());
		System.out.print(userData);
		
		   
				
				if(optionalUser.getPassword().equals(userData.getPassword())) {
					return ResponseEntity.ok(optionalUser);
				}
				else {
					return (ResponseEntity<?>) ResponseEntity.internalServerError();
				}
			
		   
		

		
		
		
	}

}
