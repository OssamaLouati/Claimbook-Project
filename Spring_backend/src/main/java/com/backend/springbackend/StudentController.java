package com.backend.springbackend;



import java.sql.SQLException;
import java.util.Map;

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
	private StudentService userservice;
	
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
	@CrossOrigin(origins = "*")
	@GetMapping("/user/sendinvitation/{userId}/{roommateName}")
	  public ResponseEntity<Integer> sendInvitation(@PathVariable("userId") int userId , @PathVariable("roommateName") String roommateName, HttpServletRequest request) throws SQLException {
	    
	   
	    int flag = userservice.endinvitationtouser(roommateName, userId);
	    
	    System.out.println(flag);
	    // TODO: Implement the code to send an invitation to the chosen roommate with the given name and id of the current user.
	    return ResponseEntity.ok(flag);
	  }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/user/sendinvitationtoroommate/{userId}")
	  public ResponseEntity<Student> sendInvitationtouser(@PathVariable("userId") int userId , HttpServletRequest request) throws SQLException {
	    
	   
	    Student user = userservice.finduserbyid(userId);
	    
	    System.out.println(user);
	    // TODO: Implement the code to send an invitation to the chosen roommate with the given name and id of the current user.
	    return ResponseEntity.ok(user);
	  }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/user/acceptinvitation/{userguestId}/{currentuserId}")
	  public ResponseEntity<Student> acceptInvitationtouser(@PathVariable("userguestId") int userguestId , @PathVariable("currentuserId") int currentuserId , HttpServletRequest request) throws SQLException {
	    
		int flag=0;
	    Student currentuser = userservice.finduserbyid(currentuserId);
	    Student userguest = userservice.finduserbyid(userguestId);
	    if(currentuser!=null && userguest!=null) {
	    	int flag1=userservice.changeroommate(currentuserId);
	    	int flag2=userservice.changeroommate(userguestId);
	    	int changeinvitation = userservice.changeinvitation(currentuserId);
	    	int sendacceptation = userservice.sendaccept(userguestId,currentuserId);
	    	flag=1;
	    }
	    
	    System.out.println(flag);
	    // TODO: Implement the code to send an invitation to the chosen roommate with the given name and id of the current user.
	    return ResponseEntity.ok(currentuser);
	  }
	@CrossOrigin(origins = "*")
	@GetMapping("/user/rejectinvitation/{userguestId}/{currentuserId}")
	  public ResponseEntity<Student> rejectInvitationtouser(@PathVariable("userguestId") int userguestId , @PathVariable("currentuserId") int currentuserId , HttpServletRequest request) throws SQLException {
	    
		int flag=0;
	    Student currentuser = userservice.finduserbyid(currentuserId);
	    Student userguest = userservice.finduserbyid(userguestId);
	    if(currentuser!=null && userguest!=null) {
	    	int changeinvitation = userservice.changeinvitation(currentuserId);
	    	int sendreject = userservice.sendreject(userguestId,currentuserId);
	    	flag=1;
	    }
	    
	    System.out.println(flag);
	    // TODO: Implement the code to send an invitation to the chosen roommate with the given name and id of the current user.
	    return ResponseEntity.ok(currentuser);
	  }
	@CrossOrigin(origins = "*")
	@GetMapping("/user/sendacceptinvitation/{userguestId}/{currentuserId}")
	  public ResponseEntity<Integer> sendacceptInvitationtouser(@PathVariable("userguestId") String userguest , @PathVariable("currentuserId") int currentuserId , HttpServletRequest request) throws SQLException {
	    
		int flag=0;
	    Student currentuser = userservice.finduserbyid(currentuserId);
	  
	    if(currentuser!=null && userguest!=null) {
	    	
	    	flag=1;
	    }
	    
	    System.out.println(currentuserId);
	    // TODO: Implement the code to send an invitation to the chosen roommate with the given name and id of the current user.
	    return ResponseEntity.ok(currentuserId);
	  }
	@CrossOrigin(origins = "*")
	@GetMapping("/user/sendrejectinvitation/{userguestId}/{currentuserId}")
	  public ResponseEntity<Integer> sendrejectInvitationtouser(@PathVariable("userguestId") String userguest , @PathVariable("currentuserId") int currentuserId , HttpServletRequest request) throws SQLException {
	    
		int flag=0;
	    Student currentuser = userservice.finduserbyid(currentuserId);
	    
	    if(currentuser!=null && userguest!=null) {
	    	
	    	flag=1;
	    }
	    
	    System.out.println(currentuserId);
	    // TODO: Implement the code to send an invitation to the chosen roommate with the given name and id of the current user.
	    return ResponseEntity.ok(currentuserId);
	  }
}
