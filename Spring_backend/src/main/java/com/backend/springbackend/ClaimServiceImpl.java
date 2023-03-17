package com.backend.springbackend;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ClaimServiceImpl implements ClaimService {
	
	Connection connection;
	private int flag = 0;
	
	public ClaimServiceImpl() throws SQLException{
		connection = DBUtil.getConnection();
	}

	@Override
	public int storeClaim(int student_id, String type, String description, MultipartFile picure, int room, int pavillon) {
		String fileName = UUID.randomUUID().toString() + ".jpg";
	    String picture_url = "C:/Users/louat/Desktop/data/" + fileName;
	  
	    try {
	    	picure.transferTo(new File(picture_url));
	    	flag =1;
	    } catch (IOException e) {
	    	flag =0;
	    	System.out.println(e.getMessage());
	    }
		try {
			PreparedStatement statement = connection.prepareStatement("INSERT INTO claims (student_id, type, description, picture_url, room, pavillon) VALUES (?, ?, ?, ?, ?, ?)");
	        statement.setInt(1, student_id);
	        statement.setString(2, type);
	        statement.setString(3, description);
	        statement.setString(4, picture_url);
	        statement.setInt(5, room);
	        statement.setInt(6, pavillon);
	        statement.executeUpdate();
	        statement.close();
	        flag =1;
		}
		
		catch(SQLException e){
			flag =0;
			System.out.println(e.getMessage());
		}
		return flag;
	}

	@Override
	public Claim getClaims(int student_id) throws SQLException {
		PreparedStatement statement = connection.prepareStatement("SELECT * FROM claims WHERE student_id ="+student_id+"");
		ResultSet re =statement.executeQuery();
		return null;
	}
	
	

}