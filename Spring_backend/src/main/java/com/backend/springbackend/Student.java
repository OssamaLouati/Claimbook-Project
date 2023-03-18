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
public class Student {
	
	
	private Integer id;
	private String email;
	private String password;
	public String name;
	private String bio;
	private String niveau;
	private int room;
	private int pavillon;
	private boolean roommate;
	private String filiere;
	private String skills;
	private String avatar;
	private String gender;
	
	
	
	
	public Integer getId() {
		return id;
	}




	public Student(Integer id, String email, String password, String name, String bio, String niveau, String filiere,
			String skills, int room, int pavillon, boolean roommate, String avatar, String gender) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.bio = bio;
		this.niveau = niveau;
		this.filiere = filiere;
		this.skills = skills;
		this.room = room;
		this.pavillon = pavillon;
		this.roommate = roommate;
		this.avatar = avatar;
		this.gender = gender;
	}




	public void setId(Integer id) {
		this.id = id;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public String getBio() {
		return bio;
	}




	public void setBio(String bio) {
		this.bio = bio;
	}




	public String getNiveau() {
		return niveau;
	}




	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}




	public String getFiliere() {
		return filiere;
	}




	public void setFiliere(String filiere) {
		this.filiere = filiere;
	}




	public String getSkills() {
		return skills;
	}




	public void setSkills(String skills) {
		this.skills = skills;
	}




	public int getRoom() {
		return room;
	}




	public void setRoom(int room) {
		this.room = room;
	}




	public int getPavillon() {
		return pavillon;
	}




	public void setPavillon(int pavillon) {
		this.pavillon = pavillon;
	}




	public boolean isRoommate() {
		return roommate;
	}




	public void setRoommate(boolean roommate) {
		this.roommate = roommate;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getName(){
		return this.name;
	};

}
