package com.markethub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.markethub.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByActive(Boolean active);

    List<Product> findByVendorId(Long vendorId);

    List<Product> findByCategoryAndActive(String category, Boolean active);

    List<Product> findBySubcategoryAndActive(String subcategory, Boolean active);

    List<Product> findByCategoryAndSubcategoryAndActive(String category, String subcategory, Boolean active);

    // ✅ FIXED SEARCH METHOD
    @Query("SELECT p FROM Product p WHERE p.active = true AND (" +
           "LOWER(p.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.category) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.subcategory) LIKE LOWER(CONCAT('%', :query, '%')) )")
    List<Product> searchActiveProducts(@Param("query") String query);
}