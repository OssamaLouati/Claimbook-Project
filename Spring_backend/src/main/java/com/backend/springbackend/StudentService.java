package com.backend.springbackend;

import java.sql.SQLException;

import org.springframework.stereotype.Repository;

@Repository
public interface StudentService {
	
	public int loginValidation(String email , String password);
	public Student finduser(String email , String password) throws SQLException;
	Student finduserbyid(int id) throws SQLException;
	int endinvitationtouser(String name, int id) throws SQLException;
	int changeroommate(int userid);
	int changeinvitation(int userid);
	public int sendaccept(int userguestId, int currentuser);
	public int sendreject(int userguestId, int currentuserId);
	public int changeinvitationresponse(int currentuserId);

}
