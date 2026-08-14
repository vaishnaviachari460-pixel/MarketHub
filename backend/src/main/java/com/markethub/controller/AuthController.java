package com.markethub.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.markethub.model.User;
import com.markethub.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

 @Autowired
 private UserService service;

 @PostMapping("/register")
 public ResponseEntity<Map<String, Object>> register(@RequestBody User user){
  try {
    // Check if user already exists
    User existingUser = service.findByEmail(user.getEmail());
    if (existingUser != null) {
      Map<String, Object> response = new HashMap<>();
      response.put("message", "User with this email already exists");
      response.put("success", false);
      return ResponseEntity.badRequest().body(response);
    }
    
    User registeredUser = service.register(user);
    
    Map<String, Object> response = new HashMap<>();
    response.put("message", "Registration successful");
    response.put("success", true);
    response.put("user", registeredUser);
    
    return ResponseEntity.ok(response);
  } catch (Exception e) {
    Map<String, Object> response = new HashMap<>();
    response.put("message", "Registration failed: " + e.getMessage());
    response.put("success", false);
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
  }
 }

 @PostMapping("/register/vendor")
 public ResponseEntity<Map<String, Object>> registerVendor(@RequestBody User user){
  try {
    // Check if user already exists
    User existingUser = service.findByEmail(user.getEmail());
    if (existingUser != null) {
      Map<String, Object> response = new HashMap<>();
      response.put("message", "User with this email already exists");
      response.put("success", false);
      return ResponseEntity.badRequest().body(response);
    }
    
    user.setRole("vendor");
    User registeredUser = service.register(user);
    
    Map<String, Object> response = new HashMap<>();
    response.put("message", "Vendor registration successful");
    response.put("success", true);
    response.put("user", registeredUser);
    
    return ResponseEntity.ok(response);
  } catch (Exception e) {
    Map<String, Object> response = new HashMap<>();
    response.put("message", "Vendor registration failed: " + e.getMessage());
    response.put("success", false);
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
  }
 }

 @PostMapping("/login")
 public ResponseEntity<Map<String, Object>> login(@RequestBody User user){
  Map<String, Object> response = new HashMap<>();
  
  try {
    User authenticatedUser = service.login(user.getEmail(), user.getPassword());
    
    if (authenticatedUser == null) {
      response.put("message", "Invalid email or password");
      response.put("success", false);
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }
    
    response.put("message", "Login successful");
    response.put("success", true);
    response.put("user", authenticatedUser);
    
    return ResponseEntity.ok(response);
    
  } catch (Exception e) {
    response.put("message", "Login failed: " + e.getMessage());
    response.put("success", false);
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
  }
 }

 @GetMapping("/user/{id}")
 public ResponseEntity<User> getUserById(@PathVariable Long id){
  User user = service.getUserById(id);
  if (user == null) {
    return ResponseEntity.notFound().build();
  }
  return ResponseEntity.ok(user);
 }
}