package com.markethub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.markethub.model.User;
import com.markethub.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

 @Autowired
 private UserRepository repo;

 public User register(User user){
  if(user.getRole() == null){
   user.setRole("customer");
  }
  if(user.getRole().equals("vendor")){
   user.setVendorApproved(false);
  }
  // Email verification is false by default in the User entity
  return repo.save(user);
 }

 public User login(String email, String password){
  User u = repo.findByEmail(email);
  if(u != null && u.getPassword().equals(password)){
   return u;
  }
  return null;
 }

 public User getUserById(Long id){
  return repo.findById(id).orElse(null);
 }

 public User updateUser(Long id, User user){
  user.setId(id);
  return repo.save(user);
 }

 public User findByEmail(String email) {
  return repo.findByEmail(email);
 }

 public List<User> getAllUsers() {
  return repo.findAll();
 }

 public User updateUser(User user) {
  return repo.save(user);
 }

 public void deleteUser(Long id) {
  repo.deleteById(id);
 }
}
