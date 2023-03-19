package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public interface ClaimService {
	public int storeClaim(int student_id, String type, String description, MultipartFile picure, int room, int pavillon);
	public Claim[] getStudentsClaims(int student_id) throws SQLException;
	public int updateClaim(int id, String type, String description, MultipartFile picure, int room, int pavillon) throws SQLException;
	public int deleteClaim(int id) throws SQLException;
	public Claim[] getTechnicianClaims() throws SQLException;
	public int completeClaim(int id, int interfering_tech) throws SQLException;

}
