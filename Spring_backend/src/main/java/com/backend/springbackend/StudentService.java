package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.stereotype.Repository;

@Repository
public interface StudentService {
	
	public int loginValidation(String email , String password);
	public Student finduser(String email , String password) throws SQLException;

}
