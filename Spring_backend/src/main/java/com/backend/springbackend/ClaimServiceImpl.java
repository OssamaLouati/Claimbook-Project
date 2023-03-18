package com.backend.springbackend;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.UUID;
import java.util.ArrayList;
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
	public Claim[] getStudentsClaims(int student_id) throws SQLException {
		
		ArrayList<Claim> claimsList = new ArrayList<>();
		
		PreparedStatement statement = connection.prepareStatement("SELECT * FROM claims WHERE student_id = ?");
        statement.setInt(1, student_id);
        ResultSet resultSet = statement.executeQuery();
        
        while (resultSet.next()) {
            int claimId = resultSet.getInt("id");
            int studentId = resultSet.getInt(student_id);
            String type = resultSet.getString("type");
            String description = resultSet.getString("description");
            Timestamp dateCreated = resultSet.getTimestamp("dateCreated");
            String state = resultSet.getString("state");
            String picture_url = resultSet.getString("picture_url");
            int room = resultSet.getInt("room");
            int pavillon = resultSet.getInt("pavillon");

            Claim claim = new Claim(claimId, studentId, type, description,dateCreated, state, picture_url, room, pavillon  );
            
            claimsList.add(claim);
        }
        Claim[] claimsArray = new Claim[claimsList.size()];
        claimsList.toArray(claimsArray);

        resultSet.close();
        statement.close();

        return claimsArray;
	}

	@Override
	public int updateClaim(int id, String type, String description, MultipartFile picure, int room, int pavillon) throws SQLException {
		int rowsAffected = 0;
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
	    	PreparedStatement statement = connection.prepareStatement("UPDATE claims SET type=?, description=?, picture_url=? WHERE id=?");
	    	statement.setString(1, type);
	        statement.setString(2, description);
	        statement.setString(3, picture_url);
	        statement.setInt(4, id);
	        statement.executeUpdate();
	        statement.close();
	    	
	    } catch(SQLException e){
	    	flag =0;
			System.out.println(e.getMessage());
	    	
	    }
		
		
		
		return rowsAffected;
	}
	
	

}
