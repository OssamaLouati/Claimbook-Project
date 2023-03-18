package com.backend.springbackend;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

@Service
public class TechnicianServiceImpl implements TechnicianService {
	
	Connection connection;
	private int flag = 0;
	
	public TechnicianServiceImpl() throws SQLException{
		connection = DBUtil.getConnection();
	}

	@Override
	public int loginValidationTechnician(String email, String password) {
		try {
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM technicians WHERE email ='"+email+"'");
			ResultSet re =statement.executeQuery();
			
			while(re.next()) {
				if(re.getString(3).equals(email) && re.getString(4).equals(password)) {
					flag =1;
					
				}
				else {
					System.out.println("invalid email/password for technicians");
					flag=0;
				}
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public Technician findTechnician(String email, String password) throws SQLException {
		PreparedStatement statement = connection.prepareStatement("SELECT * FROM technicians WHERE email ='"+email+"' AND password ='"+password+"'");
		ResultSet re =statement.executeQuery();
		
		
		if (re.next()) {
		    long id = re.getLong("id");
		    String technicianName = re.getString("name");
		    String technicianEmail = re.getString("email");
		    String technicianPassword = re.getString("password");
		    

		    Technician technician = new Technician((int) id, technicianName, technicianEmail, technicianPassword);
	

		    return technician;
		} else {
		    return null;
		}
	}

}
