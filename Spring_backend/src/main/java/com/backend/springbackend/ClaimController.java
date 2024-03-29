package com.backend.springbackend;



import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.sql.SQLException;
import java.util.UUID;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
  public ResponseEntity<Claim> uploadFile(@RequestParam("student_id") int student_id,@RequestParam("type") String type, @RequestParam("picture") MultipartFile file,@RequestParam("description") String description,@RequestParam("room") int room,@RequestParam("pavillon") int pavillon) {
	  
	try {
		int flag = ClaimService.storeClaim(student_id, type, description, file, room, pavillon);
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
  
  @CrossOrigin(origins = "*")
  @GetMapping("/claims")
  public List<Claim> getStudentClaims(@RequestParam("student_id") int student_id) throws SQLException {
      Claim[] claimArray = ClaimService.getStudentsClaims(student_id);
      return Arrays.asList(claimArray);
  }
  
  @CrossOrigin(origins = "*")
  @GetMapping("/allclaims")
  public List<Claim> getAllClaims() throws SQLException {
	  System.out.println("heyooo");
      Claim[] claimArray = ClaimService.getTechnicianClaims();
      return Arrays.asList(claimArray);
  }
  
  @CrossOrigin(origins = "*")
  @PutMapping("/claim")
  public ResponseEntity<Claim> updateStudentClaim(@RequestParam("id") int id,@RequestParam("type") String type, @RequestParam("picture") MultipartFile file,@RequestParam("description") String description,@RequestParam("room") int room,@RequestParam("pavillon") int pavillon) throws SQLException {
	  
	  try {
			int flag = ClaimService.updateClaim(id, type, description, file, room, pavillon);
			if (flag ==1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	  
  }
  
  @CrossOrigin(origins = "*")
  @PutMapping("/finish_claim")
  public ResponseEntity<Claim> finishStudentClaim(@RequestParam("id") int id, @RequestParam("interfering_tech") int interfering_tech	) throws SQLException {
	  
	  try {
			int flag = ClaimService.completeClaim(id, interfering_tech);
			if (flag ==1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }
  
  @CrossOrigin(origins = "*")
  @PutMapping("/reject_claim")
  public ResponseEntity<Claim> rejectStudentClaim(@RequestParam("id") int id, @RequestParam("interfering_tech") int interfering_tech	) throws SQLException {
	  
	  try {
			int flag = ClaimService.rejectClaim(id, interfering_tech);
			if (flag ==1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }
  
  @CrossOrigin(origins = "*")
  @DeleteMapping("/claim")
  public ResponseEntity<String> deleteStudentClaim(@RequestParam("id") int claim_id) {
      
	  try {
			int flag = ClaimService.deleteClaim(claim_id);
			if (flag ==1) {
				return new ResponseEntity<>("Claim deleted successfully", HttpStatus.OK);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("Failed to delete claim", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	return null;
	  
      
  }
  
  
  
}


