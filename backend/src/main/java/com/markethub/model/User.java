package com.markethub.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String name;
 private String email;
 private String password;
 private String phone;
 private String role; // customer, vendor

 // Vendor-specific fields
 private String shopName;
 private String shopDescription;
 private String shopImage;
 private Boolean vendorApproved;
}