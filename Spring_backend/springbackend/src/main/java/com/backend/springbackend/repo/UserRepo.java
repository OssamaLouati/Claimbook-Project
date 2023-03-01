package com.backend.springbackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.springbackend.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
	 User findByEmail(String email);

}
