package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.stereotype.Repository;

@Repository
public interface TechnicianService {
	public int loginValidationTechnician(String email , String password);
	public Technician findTechnician(String email , String password) throws SQLException;

}
