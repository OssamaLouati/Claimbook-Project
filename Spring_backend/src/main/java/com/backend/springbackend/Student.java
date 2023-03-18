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



@Data
@NoArgsConstructor
public class Student {
	
	
	private Integer id;
	private String email;
	private String password;
	public String name;
	private String bio;
	private String niveau;
	private int room;
	private int pavillon;
	private String filiere;
	private String skills;
	private boolean roommate;
	private String avatar;
	private String gender;
	
	public Student(Integer id, String email, String password, String name, String bio, String niveau, int room, int pavillon, String filiere, String skills, boolean roommate, String avatar, String gender) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.bio = bio;
		this.niveau = niveau;
		this.room = room;
		this.pavillon = pavillon;
		this.filiere = filiere;
		this.skills = skills;
		this.roommate = roommate;
		this.avatar = avatar;
		this.gender = gender;
	}
	
	
	
	
	

}
