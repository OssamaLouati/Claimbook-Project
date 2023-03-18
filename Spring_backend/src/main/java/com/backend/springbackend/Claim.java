package com.backend.springbackend;


import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Component
public class Claim{
	public int id; 	
	public int student_id;
	public String type;
	public String description;
	public Timestamp dateCreated ;
	public String state;
	public String picture_url;
	public int room;
	public int pavillon;
	
	public Claim(int id, int student_id, String type, String description, Timestamp dateCreated, String state, String picture_url, int room, int pavillon) {
		super();
		this.id = id;
		this.student_id = student_id;
		this.type = type;
		this.description = description;
		this.dateCreated = dateCreated;
		this.state = state;
		this.picture_url = picture_url;
		this.room = room;
		this.pavillon = pavillon;
	}
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}