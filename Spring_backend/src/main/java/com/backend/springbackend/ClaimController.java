package com.backend.springbackend;



import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.sql.SQLException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.criteria.Path;
import jakarta.servlet.annotation.MultipartConfig;



@MultipartConfig(
		  fileSizeThreshold = 1024 * 1024 * 2, // 2MB
		  maxFileSize = 1024 * 1024 * 10, // 10MB
		  maxRequestSize = 1024 * 1024 * 50 // 50MB
		)

@RestController
public class ClaimController {

  @Autowired
  private Claim claim;
  
  @CrossOrigin(origins = "*")
  @PostMapping("/claim")
  public ResponseEntity<FileUploadResponse> uploadFile(@RequestParam("picture") MultipartFile file,
                                                       @RequestParam("description") String description) {
    String fileName = UUID.randomUUID().toString() + ".jpg";
    String filePath = "C:/Users/louat/Desktop/data/" + fileName;
    try {
        file.transferTo(new File(filePath));
    } catch (IOException e) {
        e.printStackTrace();
    }

    String url = "http://localhost:8080/images/" + fileName;
    Claim claim = new Claim();
    claim.setDescription(description);
    claim.setUrl(url);

    return ResponseEntity.ok(new FileUploadResponse(url));
  }
}

class FileUploadResponse {
  private String url;

  public FileUploadResponse(String url) {
    this.url = url;
  }

  public String getUrl() {
    return url;
  }
}
