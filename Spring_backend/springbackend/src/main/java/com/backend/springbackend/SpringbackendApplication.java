package com.backend.springbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.backend.springbackend.repo")
public class SpringbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbackendApplication.class, args);
	}

}
