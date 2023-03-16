package com.backend.springbackend;


import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Component
public class Claim{
	public int student_id;
	public String type;
	public String description;
	public String picure_url;
	
	public String getPicure_url() {
		return picure_url;
	}
	public void setPicure_url(String picure_url) {
		this.picure_url = picure_url;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}