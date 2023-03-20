package com.backend.springbackend;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
	
	Connection connection;
	private int flag = 0;
	
	public StudentServiceImpl() throws SQLException{
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
	public Student finduser(String email, String password) throws SQLException {
		
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
				String gender = re.getString("gender");
			    String avatar = re.getString("avatar");
			    int invitation = re.getInt("invitation");
			    int invitationresponse = re.getInt("invitationresponse");
			    // extract other user properties as needed
			    

			    Student user = new Student((int) id, userEmail, userPassword,username,userBio,userniveau,userfiliere,userSkills,(int) room,(int) pav,roommate, gender, avatar, invitation , invitationresponse);
			    // set other user properties as needed

			    return user;
			} else {
			    return null;
			}
	}
	@Override
	public int endinvitationtouser(String name , int id) throws SQLException {
				 int flag=0;
				 try {
				    	PreparedStatement statement = connection.prepareStatement("UPDATE users SET invitation=? WHERE name=?");
				    	statement.setInt(1, id);
				        statement.setString(2, name);
				       
				        statement.executeUpdate();
				        statement.close();
				        flag=1;
				        
				        
				    	
				    } catch(SQLException e){
				    	flag =0;
						System.out.println(e.getMessage());
				    	
				    }
				 return flag;
	}
	@Override
	public Student finduserbyid(int id) throws SQLException {
		
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM users WHERE  id ='"+id+"'");
			ResultSet re =statement.executeQuery();
			
			
			if (re.next()) {
			    long id1 = re.getLong("id");
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
				String gender = re.getString("gender");
			    String avatar = re.getString("avatar");
			    int invitation = re.getInt("invitation");
			    int invitationresponse = re.getInt("invitationresponse");
			    // extract other user properties as needed
			    

			    Student user = new Student((int) id1, userEmail, userPassword,username,userBio,userniveau,userfiliere,userSkills,(int) room,(int) pav,roommate, gender, avatar , invitation , invitationresponse);
			    // set other user properties as needed

			    return user;
			} else {
			    return null;
			}
	}


	@Override
	public int changeroommate(int userid) {
		// TODO Auto-generated method stub
		int flag=0;
		 try {
		    	PreparedStatement statement = connection.prepareStatement("UPDATE users SET roommate=?, invitation=? WHERE id=?");
		    	statement.setInt(1, 1);
		    	statement.setInt(2, 0);
		    	statement.setInt(3, userid);
		       
		        statement.executeUpdate();
		        statement.close();
		        flag=1;
		        
		        
		    	
		    } catch(SQLException e){
		    	flag =0;
				System.out.println(e.getMessage());
		    	
		    }
		 return flag;
	}
	@Override
	public int changeinvitation(int userid) {
		// TODO Auto-generated method stub
		int flag=0;
		 try {
		    	PreparedStatement statement = connection.prepareStatement("UPDATE users SET  invitation=? WHERE id=?");
		    	
		    	statement.setInt(1, 0);
		    	statement.setInt(2, userid);
		       
		        statement.executeUpdate();
		        statement.close();
		        flag=1;
		        
		        
		    	
		    } catch(SQLException e){
		    	flag =0;
				System.out.println(e.getMessage());
		    	
		    }
		 return flag;
	}
	@Override
	public int sendaccept(int useridg , int useridc) {
		// TODO Auto-generated method stub
		int flag=0;
		 try {
		    	PreparedStatement statement = connection.prepareStatement("UPDATE users SET  invitationresponse=? WHERE id=?");
		    	
		    	statement.setInt(1, useridc);
		    	statement.setInt(2, useridg);
		       
		        statement.executeUpdate();
		        statement.close();
		        flag=1;
		        
		        
		    	
		    } catch(SQLException e){
		    	flag =0;
				System.out.println(e.getMessage());
		    	
		    }
		 return flag;
	}
	@Override
	public int sendreject(int useridg , int useridc) {
		// TODO Auto-generated method stub
		int flag=0;
		 try {
		    	PreparedStatement statement = connection.prepareStatement("UPDATE users SET  invitationresponse=? WHERE id=?");
		    	
		    	statement.setInt(1, -useridc);
		    	statement.setInt(2, useridg);
		       
		        statement.executeUpdate();
		        statement.close();
		        flag=1;
		        
		        
		    	
		    } catch(SQLException e){
		    	flag =0;
				System.out.println(e.getMessage());
		    	
		    }
		 return flag;
	}
	
	
	
	

}
