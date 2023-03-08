package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
	
	public int loginValidation(String email , String password);
	public User finduser(String email , String password) throws SQLException;

}
