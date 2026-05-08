package com.markethub.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private double price;

    private String imageUrl;

    @ElementCollection
    @Column(length = 1000)
    private List<String> imageUrls;

    // ✅ OPTIONAL MANUAL SIZES (if vendor gives custom sizes)
    @ElementCollection
    private List<String> sizes;

    // ✅ IMPORTANT: ADD THIS
    private String sizeType; 
    // values: shoes, clothing, numeric, free

    private String brand;
    private String category;
    private String subcategory;
    private int stock;
    private double rating;
    private int reviewCount;
    private boolean active;
    private Long vendorId;

    // Builder methods
    public Product setName(String name) {
        this.name = name;
        return this;
    }

    public Product setDescription(String description) {
        this.description = description;
        return this;
    }

    public Product setPrice(double price) {
        this.price = price;
        return this;
    }

    public Product setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }

    public Product setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
        return this;
    }

    public Product setCategory(String category) {
        this.category = category;
        return this;
    }

    public Product setSubcategory(String subcategory) {
        this.subcategory = subcategory;
        return this;
    }

    public Product setStock(int stock) {
        this.stock = stock;
        return this;
    }

    public Product setRating(double rating) {
        this.rating = rating;
        return this;
    }

    public Product setReviewCount(int reviewCount) {
        this.reviewCount = reviewCount;
        return this;
    }

    public Product setActive(boolean active) {
        this.active = active;
        return this;
    }

    public Product setVendorId(Long vendorId) {
        this.vendorId = vendorId;
        return this;
    }

    public Product setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    // ✅ ADD THIS SETTER
    public Product setSizeType(String sizeType) {
        this.sizeType = sizeType;
        return this;
    }
}