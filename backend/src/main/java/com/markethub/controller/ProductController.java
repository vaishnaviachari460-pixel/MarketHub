package com.markethub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.markethub.model.Product;
import com.markethub.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*") // ✅ safer for frontend connection
public class ProductController {

    @Autowired
    private ProductRepository repo;

    // ✅ GET ALL PRODUCTS
    @GetMapping
    public List<Product> getAll() {
        return repo.findAll();
    }

    // ✅ GET ACTIVE PRODUCTS
    @GetMapping("/active")
    public List<Product> getActiveProducts() {
        return repo.findByActive(true);
    }

    // ✅ FIXED SEARCH (IMPORTANT FIX)
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String query) {
        return repo.searchActiveProducts(query);
    }

    // ✅ GET BY CATEGORY
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return repo.findByCategoryAndActive(category, true);
    }

    // ✅ GET BY SUBCATEGORY
    @GetMapping("/subcategory/{subcategory}")
    public List<Product> getBySubcategory(@PathVariable String subcategory) {
        return repo.findBySubcategoryAndActive(subcategory, true);
    }

    // ✅ GET BY CATEGORY + SUBCATEGORY
    @GetMapping("/category/{category}/subcategory/{subcategory}")
    public List<Product> getByCategoryAndSubcategory(
            @PathVariable String category,
            @PathVariable String subcategory) {

        return repo.findByCategoryAndSubcategoryAndActive(category, subcategory, true);
    }

    // ✅ GET PRODUCTS BY VENDOR
    @GetMapping("/vendor/{vendorId}")
    public List<Product> getVendorProducts(@PathVariable Long vendorId) {
        return repo.findByVendorId(vendorId);
    }

    // ✅ GET SINGLE PRODUCT
    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }

    // ✅ ADD PRODUCT
    @PostMapping
    public Product add(@RequestBody Product p) {
        return repo.save(p);
    }

    // ✅ UPDATE PRODUCT (SAFE VERSION)
    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product p) {

        Product existing = repo.findById(id).orElse(null);

        if (existing == null) {
            return null; // or throw exception
        }

        // ✅ update fields manually
        existing.setName(p.getName());
        existing.setDescription(p.getDescription());
        existing.setPrice(p.getPrice());
        existing.setImageUrl(p.getImageUrl());
        existing.setImageUrls(p.getImageUrls());
        existing.setSizes(p.getSizes()); // ✅ IMPORTANT (sizes support)
        existing.setBrand(p.getBrand());
        existing.setCategory(p.getCategory());
        existing.setSubcategory(p.getSubcategory());
        existing.setStock(p.getStock());
        existing.setRating(p.getRating());
        existing.setReviewCount(p.getReviewCount());
        existing.setActive(p.isActive());
        existing.setVendorId(p.getVendorId());

        return repo.save(existing);
    }

    // ✅ DELETE PRODUCT
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}