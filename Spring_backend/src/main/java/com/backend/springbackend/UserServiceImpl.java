package com.backend.springbackend;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	Connection connection;
	private int flag = 0;
	
	public UserServiceImpl() throws SQLException{
		connection = DBUtil.getConnection();
	}
	

	@Override
	public int loginValidation(String email, String password) {
		try {
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM users WHERE email ='"+email+"'");
			ResultSet re =statement.executeQuery();
			
			while(re.next()) {
				if(re.getString(3).equals(email) && re.getString(4).equals(password)) {
					flag =1;
					
				}
				else {
					System.out.println("invalid email/password");
					flag=0;
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return flag;
	}
	@Override
	public User finduser(String email, String password) throws SQLException {
		
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM users WHERE email ='"+email+"' AND password ='"+password+"'");
			ResultSet re =statement.executeQuery();
			
			
			if (re.next()) {
			    long id = re.getLong("id");
			    String username = re.getString("name");
			    String userEmail = re.getString("email");
			    String userPassword = re.getString("password");
			    String userBio = re.getString("bio");
			    String userSkills = re.getString("skills");
			    long room = re.getLong("room");
			    long pav = re.getLong("pavillon");
			 
			    String userniveau = re.getString("niveau");
				 
			    String userfiliere = re.getString("filiere");
			    Boolean roommate = re.getBoolean("roommate");
			    
			    // extract other user properties as needed
			    

			    User user = new User((int) id, userEmail, userPassword,username,userBio,userniveau,userfiliere,userSkills,(int) room,(int) pav,roommate);
			    // set other user properties as needed

			    return user;
			} else {
			    return null;
			}
	}
	
	
	
	
	

}
