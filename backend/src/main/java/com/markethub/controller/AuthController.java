package com.markethub.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
 public User register(@RequestBody User user){
  return service.register(user);
 }

 @PostMapping("/register/vendor")
 public User registerVendor(@RequestBody User user){
  user.setRole("vendor");
  return service.register(user);
 }

 @PostMapping("/login")
 public User login(@RequestBody User user){
  return service.login(user.getEmail(), user.getPassword());
 }

 @GetMapping("/user/{id}")
 public User getUserById(@PathVariable Long id){
  return service.getUserById(id);
 }
}