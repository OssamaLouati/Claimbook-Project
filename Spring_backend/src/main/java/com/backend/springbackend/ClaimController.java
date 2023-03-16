package com.backend.springbackend;



import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.sql.SQLException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.criteria.Path;
import jakarta.servlet.annotation.MultipartConfig;



@RestController
public class ClaimController {

  @Autowired
  private ClaimService ClaimService;
  
  @CrossOrigin(origins = "*")
  @PostMapping("/claim")
  public ResponseEntity<Claim> uploadFile(@RequestParam("student_id") int student_id,@RequestParam("type") String type, @RequestParam("picture") MultipartFile file,@RequestParam("description") String description) {
	  
	try {
		int flag = ClaimService.storeClaim(student_id, type, description, file);
		if (flag ==1) {
			Claim c = new Claim();
			c.setDescription(description);
			System.out.println(c.getDescription());
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }
}

