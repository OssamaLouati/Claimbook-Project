package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public interface ClaimService {
	public int storeClaim(int student_id, String type, String description, MultipartFile picure);

}
