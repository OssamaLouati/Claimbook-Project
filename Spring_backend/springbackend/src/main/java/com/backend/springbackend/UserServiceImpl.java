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
	

}
