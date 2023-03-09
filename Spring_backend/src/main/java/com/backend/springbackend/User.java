package com.backend.springbackend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {
	
	
	private Integer id;
	private String email;
	private String password;
	public String name;
	private String bio;
	private String niveau;
	private String filiere;
	private String skills;
	private int room;
	private int pavillon;
	private boolean roommate;
	
	
	public String getName(){
		return this.name;
	};

}
