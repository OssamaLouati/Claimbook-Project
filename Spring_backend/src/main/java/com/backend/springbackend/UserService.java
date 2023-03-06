package com.backend.springbackend;

import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
	
	public int loginValidation(String email , String password);

}
