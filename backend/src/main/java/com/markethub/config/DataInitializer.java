package com.markethub.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.markethub.model.Product;
import com.markethub.repository.ProductRepository;

@Configuration
public class DataInitializer {

 @Bean
 public CommandLineRunner loadData(ProductRepository productRepository) {
  return args -> {
   if (productRepository.count() == 0) {
    addSampleProducts(productRepository);
   }
  };
 }

 private void addSampleProducts(ProductRepository productRepository) {

    List<Product> products = Arrays.asList(
        // Electronics
            createProduct("Echo Dot (5th Gen)", "Smart speaker with Alexa and improved sound.", "Electronics", "Speakers", 24.99, 100, true,
                List.of("Free Size"), // ✅ ADDED FREE SIZE
                "https://images.unsplash.com/photo-1536571195711-1b796f9f9f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlciUyMGVjaG8lMjBhbGV4YXxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
            createProduct("Apple iPhone 15 Pro", "6.1-inch display, A17 Pro chip, 128GB, Natural Titanium.", "Electronics", "iphones", 699.00, 50, true,
                List.of("Free Size"), // ✅ ADDED FREE SIZE
                "https://images.unsplash.com/photo-1695639509828-d4260075e370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXBwbGUlMjBpcGhvbmUlMjAxNSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1697284959152-32ef13855932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFwcGxlJTIwaXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"),
            createProduct("Samsung Galaxy S24 Ultra", "6.8-inch QHD+ display, 200MP camera, 256GB.", "Electronics", "Samsung", 599.99, 40, true,
                List.of("Free Size"), // ✅ ADDED FREE SIZE 
                "https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1709744722656-9b850470293f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww"),
            createProduct("Sony WH-1000XM5", "Industry Leading Noise Canceling Headphones.", "Electronics", "Headphones", 179.99, 60, true,
                List.of("Free Size"), // ✅ ADDED FREE SIZE
                "https://images.unsplash.com/photo-1612478120623-0acf9e231d27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9pc2UlMjBjYW5jZWxsaW5nJTIwaGVhZHBob25lfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1765279339828-bb765f3631c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5vaXNlJTIwY2FuY2VsbGluZyUyMGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
                "https://media.istockphoto.com/id/2203010593/photo/woman-putting-on-headphones-studying-in-school-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=G3WGN9ZnhMXkz_gRnGNk6ZBpSYmN01QyYv_qdzPz8BA="),
            createProduct("Apple MacBook Air M3", "13-inch, 8GB RAM, 256GB SSD, Space Gray.", "Electronics", "Laptop", 799.00, 30, true,
                List.of("Free Size"), // ✅ ADDED FREE SIZE 
                "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww",
                "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"),
        createProduct("Dell XPS 15", "15.6-inch FHD+, Intel i7, 16GB RAM, 512GB SSD.", "Electronics", "Laptop", 1499.99, 25, true,
            List.of("Free Size"),
            "https://images.unsplash.com/photo-1567521463850-4939134bcd4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wRGVsbCUyMFhQUyUyMDE1fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1662581872277-0fd0bf3ae8f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wRGVsbCUyMFhQUyUyMDE1fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1622820366109-3113cfa3825d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcERlbGwlMjBYUFMlMjAxNXxlbnwwfHwwfHx8MA%3D%3D"),
        createProduct("Canon EOS R8 Camera", "Full-frame mirrorless camera, 24.2MP, 4K video.", "Electronics", "Cameras", 1499.00, 15, true,
            List.of("Free Size"),
            "https://images.unsplash.com/photo-1641499304225-19bb12e10168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fub24lMjBFT1MlMjBSOCUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1636389523949-95c81a913259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2Fub24lMjBFT1MlMjBSOCUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1660238552638-5b10b06df310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENhbm9uJTIwRU9TJTIwUjglMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D"),
        createProduct("GoPro HERO12 Black", "Waterproof action camera, 5.3K60 Ultra HD video.", "Electronics", "Cameras", 399.99, 20, true,
            List.of("Free Size"),
            "https://images.unsplash.com/photo-1616858718110-cf7d21dcfc36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29Qcm8lMjBIRVJPMTIlMjBCbGFjayUyMFdhdGVycHJvb2YlMjBhY3Rpb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1595219703478-1cd6f64000f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R29Qcm8lMjBIRVJPMTIlMjBCbGFjayUyMFdhdGVycHJvb2YlMjBhY3Rpb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1616858712655-ebcf890cd2eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEdvUHJvJTIwSEVSTzEyJTIwQmxhY2slMjBXYXRlcnByb29mJTIwYWN0aW9uJTIwY2FtZXJhfGVufDB8fDB8fHww"),
        createProduct("Kindle Paperwhite", "6.8\" display, adjustable warm light, 16GB.", "Electronics", "Tablet", 139.99, 80, true,
            List.of("Free Size"),
            "https://images.unsplash.com/photo-1622122892817-45b38188db7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEtpbmRsZSUyMFBhcGVyd2hpdGUlMjBFLVJlYWRlcnN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1555631545-9dc21031669b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB８MHxzZWFyY2h８MTh８fEtpbmRsZSUyMFBhcGVyd2hpdGUlMjBFLVJlYWRlcnN8ZW5８MHx８MHx８fDA%3D",
            "https://images.unsplash.com/photo-1532104041590-1046d1a28c64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtpbmRsZSUyMFBhcGVyd2hpdGUlMjBFLVJlYWRlcnN8ZW58MHx8MHx8fDA%3D"),
        createProduct("Logitech MX Master 3S", "Wireless performance mouse, ergonomic design.", "Accessories", "Bags", 99.99, 70, true,
            List.of("Free Size"),
            "https://images.unsplash.com/photo-1658818426982-704d6dda845c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9naXRlY2glMjBNWCUyME1hc3RlciUyMDNTJTIwQWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1656071830624-06aa347f99a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExvZ2l0ZWNoJTIwTVglMjBNYXN0ZXIlMjAzUyUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1722682810969-06dfc9c9d517?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fExvZ2l0ZWNoJTIwTVglMjBNYXN0ZXIlMjAzUyUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fHww"),


            // Electronics - iPhone
createProduct("iPhone 15", "Latest Apple iPhone with A16 chip and advanced camera system.", "Electronics", "iPhone", 79999, 50, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.JV4Rk2vIh4uIP4RxGHbPgAHaEK?w=325&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.IITdVvoxBw95C6JwPkcX4QHaHa?w=155&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.FBSDZBNJJwmKiFs26j5hlgHaEK?w=284&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("iPhone 14", "Apple iPhone with powerful performance and great battery life.", "Electronics", "iPhone", 69999, 60, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.x-LRwz8XQ04zlMr0ZqG2LQHaEo?w=295&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.-iVUizXiYAhu8qiYwejulQHaKX?w=119&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.KUZifVTJgEuy0hTVBCDFDQHaE8?w=240&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),



// Google Pixel
createProduct("Google Pixel 8", "Google phone with clean Android experience and AI camera features.", "Electronics", "Google Pixel", 64999, 40, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.fXAAr0yocE9aaF0PkUqoKgHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.fn6kl5zqphq_HuudhfBYHgHaKM?w=127&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.P3paU68ukxNYCz7BqhwYGgHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// OnePlus
createProduct("OnePlus 12", "Fast performance smartphone with smooth OxygenOS.", "Electronics", "OnePlus", 59999, 80, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.1hvR3g1vdsqZpHAOWqNnQgHaE8?w=229&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.HBDq4H7P3r19Xi5D-okXTwHaE7?w=205&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.xd8VYAVnm4dLeK5LC4uY4gHaEK?w=193&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),


// Xiaomi
createProduct("Xiaomi Redmi Note 13", "Budget-friendly smartphone with great features.", "Electronics", "Xiaomi", 19999, 100, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.BbuwG0XjX1UBxf19Egl5WAHaKl?w=135&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.3sLe9zDkbRD9gfPl0u0rTAHaHa?w=226&h=220&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.-GXcioe0XG1NoYREWC8d0AHaGM?w=208&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),


// Laptop
createProduct("Lenovo ThinkPad Ultrabook", "Powerful laptop for work and study purposes.", "Electronics", "Laptop", 54999, 40, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.cmduKem40PZuDvLCz22rqQHaFU?w=223&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.xU2B8uTc4Hy_FUFOno6UfwHaF8?w=204&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.drcsl6lNuUdzr8a9K2XU8QHaF1?w=275&h=216&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Tablet
createProduct("iPad Air", "Lightweight tablet for productivity and entertainment.", "Electronics", "Tablet", 59999, 35, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.29PGs88vphVAyEPSjIMHZQHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.bQLgyeskEp_K6jow25N7uQHaE8?w=239&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.CD653_akzce7s_IvxY4FGQAAAA?w=193&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),


// Headphones
createProduct("Sony WH-1000XM5", "Noise cancelling wireless headphones with premium sound.", "Electronics", "Headphones", 29999, 90, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.jq_qgnAwCnuNw7up6iZXzQHaKu?w=129&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.dV02bFj_IAez2RHiPFMpJwHaEk?w=263&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.ZvEQQ4dwSe_9NEnSQXqXhgHaEO?w=291&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Speakers
createProduct("JBL Bluetooth Speaker", "Portable speaker with deep bass and long battery life.", "Electronics", "Speakers", 4999, 120, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.hSbtnufimM7YA11Jk2HxpAHaER?w=297&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.eV_AHmvEym2JI4Oc3Y5L4QHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.aHPZaoSYGZOzCs289pq5zgHaGk?w=161&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),


// Chargers
createProduct("Fast Charging Adapter", "Type-C fast charger for multiple devices.", "Electronics", "Chargers", 999, 200, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.97ePcx7v5o7uaaJWIGAOnwHaJT?w=151&h=190&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.8upnj3cwdZQ3zrkC7fIt7QHaGb?pid=ImgDet&w=181&h=157&c=7&dpr=1.5&o=7&rm=3",
    "https://tse2.mm.bing.net/th/id/OIP.laE5UalCP8b1WKcHDNiZogHaHg?pid=ImgDet&w=178&h=180&c=7&dpr=1.5&o=7&rm=3"),
        // Home & Kitchen
        createProduct("Instant Pot Duo 7-in-1", "Electric pressure cooker, 6 Quart.", "Kitchen", "Cookware", 89.99, 60, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.zNGz82KM7-13iSQ-ra032wHaHb?w=202&h=203&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.ydwQouD5VcUIhnLLqzSp0AHaH8?w=134&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.xY9UnHRrVGW_1fM1FOCW8AHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Dyson V15 Detect", "Cordless vacuum cleaner, laser dust detection.", "Home & Kitchen", "Vacuums", 699.99, 18, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.uNu8Aq7xEQrqWFgu3qhRXQHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th?q=Dyson+V1.5+Detect+Blue+vs+Yellow&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            "https://th.bing.com/th/id/OIP.yuJrvqMgfUVgxSONzErhwQHaEK?w=234&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Brita Water Pitcher", "10-cup water filter pitcher, BPA free.", "Kitchen", "Appliances", 34.99, 40, true,
            List.of("Free Size"),
            "https://th.bing.com/th?q=Brita+Ultra+Slim+Water+Pitcher&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            "https://th.bing.com/th?q=Clip+Art+of+Brita+Water+Pitcher&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            "https://th.bing.com/th?q=Brita+Water+Pitcher+Black+Stainless+Steel&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"),
        createProduct("Bedsure Queen Comforter Set", "7-piece bedding set, gray.", "Home & Garden", "Bedding", 59.99, 35, true,
            List.of("Free Size"),
            "https://m.media-amazon.com/images/I/81fqnt-NkFL.jpg",
            "https://th.bing.com/th?q=Bedsure+Blue+and+White&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            "https://th.bing.com/th?q=Bedsure+Comforter+Duvet+Insert&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"),
        createProduct("Keurig K-Classic Coffee Maker", "Single serve K-Cup pod coffee brewer.", "Kitchen", "Appliances", 79.99, 50, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.-FRqbetNZFZvixXpRqZVxAHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.66QQ5alrYT6O20mp0Fh_xgHaKl?w=121&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.3IzC8AALAdt3SUfnhhbjxwAAAA?w=224&h=213&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Rubbermaid Food Storage Set", "42-piece plastic containers with lids.", "Kitchen", "Storage", 29.99, 80, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.MTzBFp-UJNEGQfvDXvqSoQAAAA?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.qDgxGliQFfzTJ_XDGJABOwHaG_?w=184&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://m.media-amazon.com/images/I/611h8YwXkoL._AC_.jpg"),
        createProduct("Philips Wake-Up Light", "Sunrise simulation alarm clock.", "Home & Garden", "Lighting", 49.99, 30, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.A2frj4GN0pTUvJ4qVDKAhwHaJh?w=149&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.OBfZF9hBqbAayb7b7WVpSgHaGD?w=220&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th?q=Philips+Clock+Radio+Wake+Up+Light&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"),

            
        createProduct("Luxury Bedsheet Set", "Premium cotton bedsheet with pillow covers.", "Home & Garden", "Bedding", 1299, 40, true,
            List.of("Free Size"),
            "https://m.media-amazon.com/images/I/91PcgGGPTML._AC_.jpg",
            "https://images.woodenstreet.de/image/data/Chhavi%20India/13-04/KB301/3.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2024/9/448366428/DA/KN/JH/229696469/hand-painted-bed-sheet-1000x1000.jpeg"),

createProduct("Winter Comforter", "Soft microfiber comforter for all seasons.", "Home & Garden", "Bedding", 1999, 25, true,
    List.of("Free Size"),
    "https://m.media-amazon.com/images/I/91KX7KyPFmL._AC_.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.LZzjlb0GZou1XkE_3yL15wHaJC?pid=ImgDet&w=189&h=230&c=7&dpr=1.5&o=7&rm=3",
    "https://m.media-amazon.com/images/I/81zhBhIPNNL._AC_SL1500_.jpg"),

createProduct("Non-Stick Cookware Set", "5-piece non-stick cookware set.", "Home & Garden", "Cookware", 2499, 30, true,
    List.of("Free Size"),
    "https://tse4.mm.bing.net/th/id/OIP.89KG48X33GdqRvX9SatjzQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://m.media-amazon.com/images/I/71Jx+gIlfSS._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81SJeUvgGHL._SL1500_.jpg"),

createProduct("Stainless Steel Kadai", "Heavy-duty steel kadai for Indian cooking.", "Home & Garden", "Cookware", 899, 50, true,
    List.of("Free Size"),
    "https://m.media-amazon.com/images/I/61ZBT+PDnnL._SX679_.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.sGiXh2UWfM0DJwZgvKtgxgHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
    "https://www.hartsofstur.com/media/catalog/product/S/T/STP7451DRHS-Samuel-Groves-Classic-20cm-Stainless-Steel-Triply-Chefs-Pan.jpg?quality=80&fit=bounds&height=600&width=600&canvas=600:600"),
            

createProduct("Fabric 3-Seater Sofa", "Comfortable sofa with modern design.", "Home & Garden", "Sofa", 17999, 10, true,
    List.of("Free Size"),
    "https://images.woodenstreet.de/image/data/fabric-sofa/Fabric-Sofa-Combination/renato-fabric-sofa-combination-with-2-pouffes/updated/3.jpg",
    "https://th.bing.com/th/id/OIP.gxsAfCvRa1Hn75GYTtGDCAHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.ZlVef2nOtDS_N43YVV5SzAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Recliner Sofa", "Luxury recliner sofa for living room.", "Home & Garden", "Sofa", 29999, 8, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.-GPm71s6qUjzrHnA0wjA6gHaFH?w=272&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.TR3SthCWVESiOpXa83gZ8gHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://i5.walmartimages.com/seo/Luxury-Recliner-Sofa-Living-Room-Furniture-Set-Reclining-Couch-Rv-Sofa-Chair-Loveseat-Recliner-Couches-Living-Room-Small-Space-Office-Theater-Seating_7f1cd3c4-498e-4dad-b507-4e0b98bf5657.82b367f5c06f3c5f9de9b313347bd9e6.jpeg"),

 createProduct("6-Seater Dining Table", "Wooden dining table set.", "Home & Garden", "Dining Table", 20999, 5, true,
   List.of("Free Size"),
    "https://m.media-amazon.com/images/I/61eHMsgYtkL._AC_.jpg",
    "https://cdn.decornation.in/wp-content/uploads/2020/03/solid-wood-dining-table.png",
    "https://m.media-amazon.com/images/I/8100jx6ZW9L._SL1500_.jpg"),

createProduct("Compact Dining Table", "4-seater dining table for small homes.", "Home & Garden", "Dining Table", 14999, 12, true,
    List.of("Free Size"),
    "https://m.media-amazon.com/images/I/71ADh9NGmpL._AC_SL1300_.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.F6YXhTBzNSmAoNi55IVeNwHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
    "https://tse4.mm.bing.net/th/id/OIP.6FrGzOF0fF5Z8LFA1gWv_gHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3"),
    
    
createProduct("King Size Bed", "Spacious wooden king size bed.", "Home & Garden", "Bed", 25999, 6, true,
    List.of("Free Size"),
    "https://m.media-amazon.com/images/I/81kZl7kQHL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71ZkZl7kQHL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81zZl7kQHL._AC_SL1500_.jpg"),

createProduct("Storage Bed", "Bed with storage drawers.", "Home & Garden", "Bed", 19999, 9, true,
    List.of("Free Size"),
    "https://m.media-amazon.com/images/I/71ZkZl7kQHL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81kZl7kQHL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81zZl7kQHL._AC_SL1500_.jpg"),





        // Clothing & Fashion
        createProduct("Levi's Men's 501 Jeans", "Original fit, 100% cotton, Stonewash.", "Clothing & Fashion", "Men's Jeans", 59.99, 120, true,
           List.of("S", "M", "L", "XL"),
            "https://th.bing.com/th/id/OIP.kvCa67uzezedg-oaqAQsVQHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.E0Xxi_PWeKAzr5fe2TZSpwHaJQ?w=202&h=253&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.X86hq8TOKRsHzM36-h5z2QHaPw?w=164&h=350&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Nike Air Force 1 '07", "Men's shoes, classic white.", "Clothing & Fashion", "Men's Shoes", 110.00, 90, true,
            List.of("S", "M", "L", "XL"),
            "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlrZSUyMEFpciUyMEZvcmNlJTIwMSUyMCcwNyUyMnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1712167631738-4dab9e53c853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmlrZSUyMEFpciUyMEZvcmNlJTIwMSUyMCcwNyUyMnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE5pa2UlMjBBaXIlMjBGb3JjZSUyMDElMjAnMDclMjJ8ZW58MHx8MHx8fDA%3D"),
        createProduct("Adidas Women's Essentials Tee", "Short sleeve, crewneck, black.", "Clothing & Fashion", "Women's T-Shirts", 25.00, 80, true,
            List.of("S", "M", "L", "XL"),
            "https://images.unsplash.com/photo-1658835862234-a3d0f9d86432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWRpZGFzJTIwV29tZW4ncyUyMEVzc2VudGlhbHMlMjBUZWV8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1614231125961-38323d6c485b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWRpZGFzJTIwV29tZW4ncyUyMEVzc2VudGlhbHMlMjBUZWV8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1611886163801-fd4fceab47cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWRpZGFzJTIwV29tZW4ncyUyMEVzc2VudGlhbHMlMjBUZWV8ZW58MHx8MHx8fDA%3D"),
        createProduct("Ray-Ban Wayfarer Sunglasses", "Classic polarized sunglasses, black.", "Clothing & Fashion", "Accessories", 154.00, 60, true,
            List.of("S", "M", "L", "XL"),
            "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmF5LUJhbiUyMFdheWZhcmVyJTIwU3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmF5LUJhbiUyMFdheWZhcmVyJTIwU3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1630659115277-c17c05440e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmF5LUJhbiUyMFdheWZhcmVyJTIwU3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"),
        createProduct("Fossil Women's Riley Watch", "Stainless steel, rose gold-tone.", "Clothing & Fashion", "Accessories", 129.00, 40, true,
            List.of("S", "M", "L", "XL"),
            "https://plus.unsplash.com/premium_photo-1728012217493-b0bfdc0c389a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9zc2lsJTIwV29tZW4ncyUyMFJpbGV5JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1642177407897-4cae6bfe9942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9zc2lsJTIwV29tZW4ncyUyMFJpbGV5JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1728582543099-16578631ac77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm9zc2lsJTIwV29tZW4ncyUyMFJpbGV5JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D"),
        createProduct("Under Armour Men's Tech 2.0", "Short sleeve T-shirt, black.", "Clothing & Fashion", "Men's T-Shirts", 20.00, 100, true,
            List.of("S", "M", "L", "XL"),
            "https://th.bing.com/th/id/OIP.MnViWIKBb9tDFPLU91D8QwHaHa?w=204&h=203&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.0KnR4xTp3b-4BafnxhPu8wHaHa?w=206&h=206&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.Rl94cFy6Oz1NSZMLZyCKWgHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Columbia Women's Arcadia Jacket", "Waterproof, breathable, black.", "Clothing & Fashion", "Women's Jackets", 69.99, 50, true,
            List.of("S", "M", "L", "XL"),
            "https://th.bing.com/th/id/OIP.tlWNy3GCMPL-JJCrdwgGbwHaHa?w=149&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.DBSZBHO9zNqW5UTJlLdS0gHaHx?w=201&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.R6cgvkHW5b-qWHlLvhLVbQHaHy?w=189&h=199&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        // Women's Kurtis
createProduct("Floral Cotton Kurti", "Soft cotton kurti with floral print, comfortable for daily wear.", "Clothing & Fashion", "Women's Kurtis", 799, 100, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.fJG8Kh8rmeN3XfkABIaIKQHaNY?w=185&h=336&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.xbeeBXbeuZQwku9FWS1hVwHaKl?w=202&h=288&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.m1OtV_vxBHSfmKWIRChHgAHaJr?w=202&h=264&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Anarkali Kurti Set", "Elegant Anarkali style kurti with matching dupatta.", "Clothing & Fashion", "Women's Kurtis", 1499, 80, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.7PmLh2ghkHpBXvnFfGlmMwHaLI?w=202&h=304&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.k8b86qZxqPSNPEj4NGCI-AHaJQ?w=202&h=320&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.ev1KF2k0kezKPkTTmUdMuQHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
// Women's Sarees
createProduct("Silk Saree", "Traditional silk saree with golden border design.", "Clothing & Fashion", "Women's Sarees", 1999, 60, true,
    List.of("S", "M", "L", "XL"),
    "https://tse3.mm.bing.net/th/id/OIP.KJKOoSE49C3HLGOHq9w4IAHaKt?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.explicit.bing.net/th/id/OIP.IhiE0IGKh7px_O3DHapv4AHaKX?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://media.urbanwomania.com/wp-content/uploads/2023/11/Almond-Beige-Kanjivaram-Silk-Saree.webp"),

createProduct("Cotton Printed Saree", "Lightweight cotton saree for daily wear.", "Clothing & Fashion", "Women's Sarees", 899, 120, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.AsMA0MymsZL1fcdk1LnI9QHaKL?w=202&h=278&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.z4F03OJ6zgLgZDa2jy8hkgHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.NdheNopMEV0OKWi4sUzsUgHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Women's Dresses
createProduct("Party Wear Dress", "Stylish western party dress for women.", "Clothing & Fashion", "Women's Dresses", 1299, 70, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.b2_dR2o8UFjksq2fH9_KzQHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.kgxh-yJGvclccejYFTAZYwHaLs?w=198&h=314&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.kV_MNn9RkHmiupGQbZHzuAHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Casual Summer Dress", "Comfortable summer dress for daily use.", "Clothing & Fashion", "Women's Dresses", 999, 90, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.rJECnnr4ExbX2lHaNRwRggHaJK?w=202&h=251&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.yVjmjA61ZaEUnVVQTcklhQHaJo?w=202&h=263&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.0VTSmBEfAJWQPgtM7kG5EQHaJ2?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Running Shoes
createProduct("Nike Running Shoes", "Lightweight running shoes with cushioned sole.", "Clothing & Fashion", "Running Shoes", 2999, 50, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.gmo8flljrURCE8UN-CVWcgHaJQ?w=159&h=199&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.T_yBxnwXPvz7BrMlJkkU-wHaE8?w=341&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.vSzcJS4XXkRTNdGyCA5AbgHaE7?w=321&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Casual Shoes
createProduct("Casual Sneakers", "Trendy sneakers for everyday casual wear.", "Clothing & Fashion", "Casual Shoes", 1499, 80, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://th.bing.com/th/id/OIP.u_s69v-7823dqg6bLugCXwHaE7?w=286&h=191&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.EvxqJUMBCY0qfjWybeERuQHaEK?w=276&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.vIIrszLbCGgyksRALXuD7AHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Formal Shoes
createProduct("Men Formal Black Shoes", "Classic formal shoes for office and events.", "Clothing & Fashion", "Formal Shoes", 1999, 60, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://th.bing.com/th/id/OIP.IzbLfSmAB6r4cEE37Oz6swHaHa?w=123&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.CBrkVpDy4FRTC5q7d7cXRwHaGa?w=193&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.HgjqMJ4jzuhmLs9dK7dJJQHaHa?w=210&h=191&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

    createProduct("Embroidered Straight Kurti", "Elegant straight kurti with fine embroidery.", "Clothing & Fashion", "Women's Kurtis", 899, 90, true,
    List.of("S", "M", "L", "XL"),
    "https://tse3.mm.bing.net/th/id/OIP.7RukwmLCNMP17kXGQY5S8gAAAA?pid=ImgDet&w=181&h=241&c=7&dpr=1.5&o=7&rm=3",
    "https://cdn.shopify.com/s/files/1/0870/8104/files/anokherang-combos-cyan-green-embroidered-straight-kurti-with-straight-pants-39112206221561_1200x1200.jpg?v=1682828154",
    "https://tse2.mm.bing.net/th/id/OIP.O4RW6DWpxa3jV-RgcPYp8wHaJ4?pid=ImgDet&w=199&h=265&c=7&dpr=1.5&o=7&rm=3"),

createProduct("Printed Rayon Kurti", "Soft rayon kurti with modern prints.", "Clothing & Fashion", "Women's Kurtis", 699, 110, true,
    List.of("S", "M", "L", "XL"),
    "https://th.bing.com/th/id/OIP.ZG6cNaY83UvQ7nB4BaniWQHaJr?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.explicit.bing.net/th/id/OIP.PfJy9DTQjapuQ9sOQtMCmAHaJ4?pid=ImgDet&w=178&h=237&c=7&dpr=1.5&o=7&rm=3",
    "https://tse1.explicit.bing.net/th/id/OIP.de9j7gYrspcDI5cqqm1iWAHaJ4?pid=ImgDet&w=178&h=237&c=7&dpr=1.5&o=7&rm=3"),

    createProduct("Banarasi Silk Saree", "Rich Banarasi silk saree with zari work.", "Clothing & Fashion", "Women's Sarees", 2499, 50, true,
    List.of("S", "M", "L", "XL"),
    "https://5.imimg.com/data5/SELLER/Default/2023/11/357631169/MM/AZ/VU/9079008/31235-3-1000x1000.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.uWBRNYvURQvJvFOff8VI7QAAAA?pid=ImgDet&w=178&h=267&c=7&dpr=1.5&o=7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.bFrzhqbdhOkjqDogyJXKVQHaQm?pid=ImgDet&w=156&h=350&c=7&dpr=1.5&o=7&rm=3"),

createProduct("Chiffon Party Saree", "Lightweight chiffon saree perfect for parties.", "Clothing & Fashion", "Women's Sarees", 1299, 80, true,
    List.of("S", "M", "L", "XL"),
    "https://i.pinimg.com/originals/0a/e6/b9/0ae6b9b100abc46c7932b792d36d6f68.jpg",
    "https://th.bing.com/th/id/R.288f062934b9566e8910b129f304785d?rik=Sedy8xpkKyJx7w&riu=http%3a%2f%2fpeachmode.com%2fcdn%2fshop%2ffiles%2f1_JNX-RUCHI-SIMY24-32303D-PEACHMODE.jpg%3fv%3d1722684628&ehk=TQ25Zr1lGqcKLbilHPb%2bBwlIRMivnUiiGD3G2%2fAJons%3d&risl=&pid=ImgRaw&r=0",
    "https://peachmode.com/cdn/shop/files/1_JNX-RUCHI-STAR130-26002C-PEACHMODE.jpg?v=1695460140"),

    createProduct("Evening Gown Dress", "Elegant long gown for evening parties.", "Clothing & Fashion", "Women's Dresses", 1899, 60, true,
    List.of("S", "M", "L", "XL"),
    "https://i5.walmartimages.com/asr/a75a9755-92e3-45a6-89da-ccfad696a798.4b175929ee12c1d4a9ca84b9728173c7.jpeg",
    "https://cdn-4.jjshouse.com/upimg/s400/0e/5d/eaf6d767a8624ef2731c4b9510fe0e5d.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.USQ_3wmJF8ac_EK7-d-CHAHaJn?pid=ImgDet&w=178&h=231&c=7&dpr=1.5&o=7&rm=3"),

createProduct("Denim Casual Dress", "Stylish denim dress for everyday wear.", "Clothing & Fashion", "Women's Dresses", 1199, 85, true,
    List.of("S", "M", "L", "XL"),
    "https://img.freepik.com/premium-photo/denim-casual-dress-women-girls_920356-4103.jpg",
    "https://img.freepik.com/premium-photo/denim-casual-dress-women-girls_920356-4062.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.l_i5v9g1_HV9_EjuXe2z5wHaLI?pid=ImgDet&w=178&h=267&c=7&dpr=1.5&o=7&rm=3"),

    createProduct("Adidas Running Shoes", "Comfortable running shoes with breathable mesh.", "Clothing & Fashion", "Running Shoes", 3299, 55, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://assets.adidas.com/images/w_1880,f_auto,q_auto/6492e08793cf4e6ea344e52f96c3bcb9_9366/IH0901_05_standard.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.FLlC4DCbZWnKvXUvcrb5owHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.7xvLi2Q0XLNWDiH36RtnIQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3"),

createProduct("Canvas Casual Sneakers", "Classic canvas sneakers for daily wear.", "Clothing & Fashion", "Casual Shoes", 999, 100, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://www.canvas-shoes-wholesale.com/wp-content/uploads/2023/04/Canvas-sneakers-for-men-and-women-2.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.npIy3b64Xmd16MxWTFaB7wHaHa?pid=ImgDet&w=60&h=60&c=7&dpr=1.5&rs=1&o=7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.hlz0TuZKiyOoEok39RoC4AHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.5&o=7&rm=3"),

    createProduct("Brown Leather Formal Shoes", "Premium leather formal shoes for men.", "Clothing & Fashion", "Formal Shoes", 2299, 70, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://5.imimg.com/data5/SELLER/Default/2023/11/362558002/QV/CH/KB/194653529/formal-shoes.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.htH_dI4ajr9OKwDVc_Dv2gHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.P3K9cgoH-5tsYyGWF2uH_AHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3"),

createProduct("Flat Comfort Sandals", "Lightweight sandals for daily comfort.", "Clothing & Fashion", "Sandals", 699, 120, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://i.pinimg.com/originals/4d/0c/52/4d0c52109b153936eca79584d8d9b8e5.png",
    "https://images-na.ssl-images-amazon.com/images/I/61VkxVXlwML.jpg",
    "https://m.media-amazon.com/images/I/31uhReFu+US._SX395_SY395_.jpg"),


// Sandals
createProduct("Women's Fashion Sandals", "Stylish and comfortable daily wear sandals.", "Clothing & Fashion", "Sandals", 799, 100, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://th.bing.com/th/id/OIP.O0Y2Gg5LPocWkG6wf6gr7AHaJ3?w=165&h=220&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.zf7mo1J4qhdKnSA9oawk_wHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.8LSAiGhe3efSkOM1ZAR3OAHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
            // Beauty & Personal Care
        createProduct("Olaplex No. 3 Hair Perfector", "Repairs and strengthens all hair types.", "Beauty & Personal Care", "Hair Care", 30.00, 70, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ysHdEvxLr1EuZLC5uC5fBgHaJV?w=166&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.Luz1JwscrsjKD_BWSnIcxAHaNk?w=127&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP._L7ILfm9atnVU2LviIGGVgHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Maybelline Lash Sensational Mascara", "Full fan effect, washable, blackest black.", "Beauty & Personal Care", "Makeup", 8.99, 90, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ZtUeRMSEUJskt_8bpBWYewHaHa?w=187&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://i5.walmartimages.com/seo/Maybelline-Lash-Sensational-Luscious-Waterproof-Mascara-Very-Black_1f095905-26b7-411b-bc88-4fb08a4b24a4.35e9397a43e2e772b49fe9a90d83bb9d.jpeg",
            "https://th.bing.com/th/id/OIP.GLmGRz1S35B4CNlDSATyhwHaHa?w=128&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Neutrogena Hydro Boost Gel", "Face moisturizer for dry skin, 1.7 oz.", "Beauty & Personal Care", "Skin Care", 18.99, 60, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.DxCFkZ-leKbxfsJ5mGXWPQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.2ehuL9BT0e5RwGZsQVJUHgHaEl?w=63&h=63&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.5&pid=InlineBlock&rm=3",
            "https://th.bing.com/th/id/OIP.0IAJywvvt-Og3ji3n_BEqQHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Philips Sonicare 4100", "Electric toothbrush, pressure sensor, white.", "Beauty & Personal Care", "Skin Care", 49.95, 40, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.6qwqoAhgUml4OLEFM6Vt4gHaJK?w=156&h=194&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.vRZfjprg1nGK7wHcHiKYsAHaJN?w=160&h=198&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.dpK_nwM8vHatnuOs6jZheAHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Gillette Fusion5 Razor", "Men's razor with 5 blade refills.", "Beauty & Personal Care", "Skin Care", 19.99, 80, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.TnkjbuRLqGiwZgM_ItOxIQHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.W1LZC2s0Pq46WfJe6TMO6gHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.WpOMo5ACK8AdswcGrxx_5QHaHa?w=148&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

        // Sports & Outdoors
        createProduct("Fitbit Charge 6", "Fitness tracker with heart rate, black.", "Sports & Outdoors", "Fitness Equipment", 159.95, 50, true,
            List.of("Free Size"),
            "https://m.media-amazon.com/images/I/61wn2jfhBkL.jpg",                  
            "https://th.bing.com/th/id/OIP.GxYimVFWyxgWAw2b1SO54gHaEK?w=227&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.OPI44DnKX1wo6hjSkKNnOAHaFj?w=243&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Adidas Defender IV Duffel Bag", "Medium sports bag, black/white.", "Sports & Outdoors", "Camping", 40.00, 60, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.dIeBRsnD_JJu_ruj-bHkQAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.mScelH4ElhcpgWqdK9nCxAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP._qNVUTACS3GUXUplJlXwzgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("CamelBak Eddy+ Water Bottle", "25oz, leak-proof, Charcoal.", "Sports & Outdoors", "Fitness Equipment", 16.00, 100, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.B8M6ArI8xO_WCMO6YVbLLgHaHa?w=207&h=220&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.NXgt8J0cJlRRN87LVsqOrwHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.YWEJYD0teroRBTXCbRZ6fwHaJ2?w=157&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Wilson Evolution Basketball", "Official size, indoor game ball.", "Sports & Outdoors", "Fitness Equipment", 64.95, 40, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.eCv8RFkpGsTTzhgIZUJLIgHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.vJMpiSE7K4YjilLtpYd0ngHaHa?w=216&h=216&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.hXNLWI7R-1NMGNAhfiM8hwHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Coleman Sundome Tent", "4-person dome tent, green.", "Sports & Outdoors", "Camping", 99.99, 30, true,
            List.of("Free Size"),
            "https://m.media-amazon.com/images/I/71wxEg6ubCL._AC_SL1500_.jpg",
            "https://th.bing.com/th/id/OIP.I881DhT2XIYUYjn7dvzxywHaGG?w=89&h=89&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.5&pid=InlineBlock&rm=3",
            "https://th.bing.com/th/id/OIP.QFJJQW2uy6GqyMEP8cRo0gAAAA?w=215&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        // Sports & Outdoors - Ball Sports
        createProduct("Football", "Standard size football for training and matches.", "Sports & Outdoors", "Ball Sports", 799, 100, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.U261juV34cV65GpGfcMBvgHaE8?w=254&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.NpW9XzFzUppJrrokX_gZrQHaE7?w=252&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.K-y3hH9_Ihp64L1HNflkzAHaE8?w=252&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Cricket Bat", "Lightweight willow cricket bat for professional play.", "Sports & Outdoors", "Ball Sports", 1999, 60, true,
         List.of("Free Size"),
            "https://th.bing.com/th/id/OIP._vs2Fk9X6yV4dh-Q2qeKxAHaHa?w=214&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.o1VS11iwyo8Zf0II9G4ZbgHaNM?w=120&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.xmIRFhGVFFcLXhhTvm9D2wHaHa?w=213&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


        // Yoga & Fitness
        createProduct("Yoga Mat", "Non-slip yoga mat for daily exercise and stretching.", "Sports & Outdoors", "Yoga & Fitness", 999, 120, true,
          List.of("Free Size"),
           "https://th.bing.com/th/id/OIP.kEvpjZBweC8RI5VEfJJIIAHaE8?w=300&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
           "https://th.bing.com/th/id/OIP.yc72LJCD4tV6xlnxGvzZcQHaF8?w=248&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
           "https://th.bing.com/th/id/OIP.r2asj0aBmZD7yQsu6AKzMwHaHM?w=197&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Weights
createProduct("Adjustable Dumbbells", "Home gym dumbbells with adjustable weight plates.", "Sports & Outdoors", "Weights", 2999, 80, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.F8fhqRGk0W-Wd1F66HTR_QHaFm?w=243&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.YH4Ce6VZGBI1gDu7hba3IgHaHa?w=183&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.IqpmfeP2diJ4CDyZFhyDOQHaE8?w=222&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),


// Fitness Equipment
createProduct("Skipping Rope", "Speed skipping rope for cardio and fitness training.", "Sports & Outdoors", "Fitness Equipment", 299, 200, true,
   List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.GoIGCLTysrl6b-z8i5NqyAHaHa?w=211&h=212&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.S12xYjwOoe8eoyJnHPe3pgHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.iIpmYlWImK5Zy5JzeNYDtgHaHa?w=184&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Running Shoes
createProduct("Nike Running Shoes", "Lightweight shoes designed for running and comfort.", "Sports & Outdoors", "Running Shoes", 3499, 70, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://th.bing.com/th/id/OIP.rjwGHcb9ZfCUsd4ESjZjSAHaJQ?w=177&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.PC_rINmgcdwcW1qCHJJ2AAHaEK?w=297&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.K8EaCsdmTIG9CA-SVlG-4gHaDt?w=313&h=174&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Camping
createProduct("Camping Tent", "Waterproof 2-person camping tent for outdoor adventures.", "Sports & Outdoors", "Camping", 4999, 40, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.TxlXgXl4eN5grwXl3G6YRQHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.wOgn8yk13WL102aAiLgZLQHaHa?w=177&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.O932rDwlVyntLvmA0mZpJAHaHa?w=177&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),


// Footwear
createProduct("Sports Sandals", "Comfortable outdoor sandals for trekking and travel.", "Sports & Outdoors", "Footwear", 1299, 150, true,
    List.of("6 UK", "7 UK", "8 UK", "9 UK"),
    "https://th.bing.com/th/id/OIP.uRbOI7rulThLImWVf8r4bAHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.IVya9WS_SkhpKEVS9rUBxQHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.L_Qselq_CzPHSa2ZX0l3KAHaJ3?w=122&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        
        
            // Toys & Games
        createProduct("LEGO Classic Bricks Set", "1,500 pieces, creative building kit.", "Toys & Games", "Building Sets", 39.99, 80, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.1ks3sh1kirblERACBoL11wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://tse4.mm.bing.net/th/id/OIP.6wGyY4CmY-_ZpBj7RAInlwHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.xjw1Y3IPA5XL2SuFrWLIdQHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Barbie Dreamhouse", "3-story dollhouse with pool and slide.", "Toys & Games", "Dolls", 199.99, 20, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.VVLm1Hl6J2F9_4H6C04oeAHaJi?w=143&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.XtwmpCVXD3woWlvK3RwNvwHaFU?w=292&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.0_921NsD38w8p6lJR-lFawHaFp?w=240&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("NERF Elite 2.0 Blaster", "Motorized dart blaster, 20 darts included.", "Toys & Games", "Outdoor Play", 34.99, 60, true,
                List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ubpZCUOoLFo-vskQW5n3cQHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.owhK8M-yj87cMEQfTzLJBQHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th?q=Nerf+Elite+2+0+Turbine+CS-18&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"),
        createProduct("UNO Card Game", "Classic family card game, 112 cards.", "Toys & Games", "Games", 7.99, 100, true,
            List.of("Free Size"),   
            "https://th.bing.com/th/id/OIP.xFFXUT82k57-O3XfXwUOSAHaFR?w=289&h=205&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.K3HW0uzZiLcRbIviMGW_kQHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
            "https://th.bing.com/th/id/OIP.awkJYj3dGK0vFUiDeCBRWAHaHw?w=196&h=205&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Hot Wheels 50-Car Pack", "Die-cast toy cars, gift set.", "Toys & Games", "Vehicles", 54.99, 40, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.rLQJ_9tcET_-UIa2DtdTuAHaGN?w=206&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th?q=Hot+Wheels+50+Car+Pack+in+Stock&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            "https://th.bing.com/th/id/OIP.2S0Vhk4FTzONWzfzmovbdAHaEK?w=280&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        // Books
        createProduct("Atomic Habits", "James Clear, paperback, self-help bestseller.", "Books", "Self-Help", 11.98, 100, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.4C6UkPwR17gFRpk04Ux-tAHaJh?w=131&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.CRqCdoyNexBT2ivR5uNsMgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th?q=Atomic+Habits+Cover&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"),
        createProduct("The Hobbit", "J.R.R. Tolkien, illustrated edition, fantasy classic.", "Books", "Fiction", 14.99, 80, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.3c8YSbau-zTupEfGs8WpzwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.qnb4dwNN3NYSraWQmpi-3wHaKu?w=202&h=293&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.VD87WgHZeX0ZEXROR6asQQHaFj?w=222&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("The Very Hungry Caterpillar", "Eric Carle, board book, children's classic.", "Books", "Children's Books", 5.99, 90, true,
            List.of("Free Size"),   
            "https://th.bing.com/th/id/OIP.xUdYe9Rs9KL5TBplFeXB-gHaFK?w=235&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.YvgnsDcCMX6dAVv5Mhc1pAHaD4?w=222&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.lMfnYgvMOzNCAGUJ9DQB9gHaFL?w=200&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("The Body Keeps the Score", "Bessel van der Kolk, paperback, psychology.", "Books", "Non-Fiction", 12.99, 70, true,
                List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.qE4WAqFeZzh9vMedjJ3MnAHaFl?w=232&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.O4E33fZIRqsKjNPKyGHb2QHaEK?w=284&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.RbCJvYYjLZlGDGH0MSWCigHaEK?w=264&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Harry Potter Box Set", "J.K. Rowling, books 1-7, paperback.", "Books", "Fiction", 52.99, 60, true,
                List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.x4hQ2y6jPo-dv4f0bTnhvgHaKt?w=155&h=220&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://rarebookcellar.cdn.bibliopolis.com/pictures/173028.jpg?v=1680822481",
            "https://th.bing.com/th/id/OIP.PxX__aNqnK9XB6Mu_ZRKSgHaE7?w=89&h=90&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.5&pid=InlineBlock&rm=3"),
        // Grocery & Gourmet Food
        createProduct("Starbucks Pike Place Roast", "Medium roast ground coffee, 28 oz.", "Grocery & Gourmet Food", "Coffee", 18.99, 80, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ogzVyG34xKlKryz0S-D73gHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.a9yV23s4PAp5Oo7QFO0R_AHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
            "https://tse1.mm.bing.net/th/id/OIP.lcH5DNwWNHfDKXOIkUd6DQHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Quaker Oats Old Fashioned", "100% whole grain oats, 42 oz.", "Grocery & Gourmet Food", "Breakfast Foods", 6.98, 100, true,
            List.of("Free Size"),   
            "https://th.bing.com/th/id/OIP.5myL29ux9ZCNjhPESB94uAHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.5myL29ux9ZCNjhPESB94uAHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.-KpuzmbcEwGwOs9omtqn6AHaKL?pid=ImgDet&w=189&h=259&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Nature Valley Granola Bars", "Oats 'n Honey, 30 count.", "Grocery & Gourmet Food", "Snacks", 12.49, 90, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.1s7P0i9rij54hTy6xt1TaQHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.DV0P39CbIsiaKBXXBACnYAAAAA?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3",
            "https://tse2.mm.bing.net/th/id/OIP.V6Qc1zq2cG0K8s2g1jgj1wHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Blue Diamond Almonds", "Lightly salted, 40 oz bag.", "Grocery & Gourmet Food", "Nuts & Seeds", 15.99, 70, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.zluIYYBfjWYacR5fzuS4MAHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.24-6Pie9EJvgVopnQMkgDAHaFj?w=253&h=190&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.f-2Ex3EfWQQMTJPmJnuiAgHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        
        // Pet Supplies
        createProduct("Purina ONE Dry Cat Food", "Chicken & Turkey, 16 lb bag.", "Pet Supplies", "Cat Food", 27.98, 50, true,
            List.of("Free Size"),
            "https://tse4.mm.bing.net/th/id/OIP.qn7sBXQP1V0VF8to_dKIYgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://th.bing.com/th/id/OIP.XcEPE2uLXGBUGAy8w-QuowHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.B9LXuy2dZOP4FDKKB4GYTgHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Greenies Dental Dog Treats", "Original flavor, regular size, 36 oz.", "Pet Supplies", "Dog Treats", 29.98, 60, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ckW1e5GdZxwNO_JfAYPo6AHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.y7ms9L7gpdUfQZGUcr1xuAHaJe?w=171&h=219&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.DaZ_ZPxzTePZxTdIiqR5ogHaHa?w=128&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("KONG Classic Dog Toy", "Durable natural rubber, medium size.", "Pet Supplies", "Dog Toys", 12.99, 80, true,
            List.of("Free Size"),
            "https://tse3.mm.bing.net/th/id/OIP.885W2Nm6P5dXMXIfDR0yFAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://tse2.mm.bing.net/th/id/OIP.dlI8nGFcDTZoKCIyA_nOAQHaLK?pid=ImgDet&w=178&h=267&c=7&dpr=1.5&o=7&rm=3",
            "https://tse1.mm.bing.net/th/id/OIP.3rlky4WTMM8ZQZSYHdbShAHaII?pid=ImgDet&w=178&h=195&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Arm & Hammer Clump & Seal", "Platinum cat litter, 40 lb.", "Pet Supplies", "Cat Litter", 24.99, 70, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ljhxVVrV3htQUWP8faQqwgHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.Y9bYu21ud2YseOQO1AbMvQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
            "https://tse1.mm.bing.net/th/id/OIP.Kg00jhddCv0SoRaVqb-1fgAAAA?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Tetra Whisper Aquarium Filter", "Up to 30 gallons, easy install.", "Pet Supplies", "Aquarium Supplies", 19.99, 40, true,
            List.of("Free Size"),
            "https://www.thebiodude.com/cdn/shop/products/75025816_grande.jpg?v=1583195924",
            "https://tse4.mm.bing.net/th/id/OIP.MAjNj8h-2LzmTTeRonhtBAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
            "https://th.bing.com/th/id/OIP.OU3QTTbPj364_qhSUrJlZwHaHa?w=146&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

            
// Wallets
createProduct("Leather Wallet", "Premium leather wallet with multiple card slots.", "Accessories", "Wallets", 999, 100, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.gxE6lYsOVFAwS_kz5fcTnAHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.fec4fWd2YdvgQecbFLDWygHaHa?w=197&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.aKcZPIDDuo0TZkfi0Ce0VAHaH2?w=186&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Slim RFID Wallet", "Anti-theft slim wallet with RFID protection.", "Accessories", "Wallets", 1299, 80, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.1AVbOFw1Q4XVbrlJWJHggwHaIT?w=176&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.oC1NUBPbm_A2Yd5eQKownwHaGV?w=229&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.p5KQ44SVUmN8GX4_BPSQXgHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Eyewear
createProduct("Stylish Sunglasses", "UV protected stylish sunglasses for daily wear.", "Accessories", "Eyewear", 799, 120, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.b4MaH1xYUxSzzrGYZyNZ0gHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP._nwGaSKyYNI6nvW8vxnxfQHaJ4?w=160&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.-IU75HO-8e1FNt3jY743mwHaHZ?w=189&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Blue Light Glasses", "Protective glasses for screen usage and eye comfort.", "Accessories", "Eyewear", 999, 90, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.Jqh8MuNQ-3U3pIqZbZiQ_wHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.Jb82s699rEdLQO_NEJ5M4wHaHa?w=154&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.HycfNl3am-fqzBxv_Y9vvAHaHa?w=154&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Watches
createProduct("Analog Wrist Watch", "Elegant leather strap wrist watch.", "Accessories", "Watches", 1499, 80, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.8Faqc_l8tF35HR8pXWswRAHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.91QhxFg3O4MjHOr6d-gdcwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.CVNPHdKM56fI4UqPoKvB-wHaHa?w=122&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Smart Watch", "Fitness tracking smart watch with notifications.", "Accessories", "Watches", 2999, 70, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.HpfRTc6Q3EZlWj_kPNxxRgHaID?w=167&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.tKJl-Z8H2b0Y2Uai4G5B7wHaHQ?w=216&h=212&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.HEGwaxvVhL7wfUqAKLuZKAHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),


// Bags
createProduct("Men’s Backpack", "Durable backpack for college and travel use.", "Accessories", "Bags", 1299, 90, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.d_rQcs09dCOT4oNR0XF29wHaJ3?w=134&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.e7NbBN_2G009JarqwJ0JfAHaFw?w=198&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.-sOV-BOp6CjdfqoiX6xjxAHaHa?w=116&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),

createProduct("Laptop Bag", "Water-resistant laptop bag with multiple compartments.", "Accessories", "Bags", 1599, 85, true,
    List.of("Free Size"),
    "https://th.bing.com/th/id/OIP.VaQhvMJEU0_nfhJhWQUH3QHaGe?w=220&h=193&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.vF_ohU6nWIWtWzeC_-DfqgHaGO?w=192&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.ivVLoAbUnNOKoTNyI1NSvAHaHa?w=187&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"),
        // Automotive
        createProduct("Meguiar's Gold Class Car Wash", "Shampoo & conditioner, 1 gallon.", "Automotive", "Car Care", 16.99, 60, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.ZTwXoXRu3R3_N9zSOUNkawHaOW?w=89&h=89&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.5&pid=InlineBlock&rm=3",
            "https://tse4.mm.bing.net/th/id/OIP.XfkM_pMSfXEEQAOs_1mA5gAAAA?pid=ImgDet&w=164&h=350&c=7&dpr=1.5&o=7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.It8v8FePLWIJlgwuDMSogAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("NOCO Boost Plus Jump Starter", "1000A portable lithium battery, 12V.", "Automotive", "Tools & Equipment", 99.95, 30, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.x_yQe_UOaij43BU5AQtSDQHaD-?w=276&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.OhrDGHZe1ShL6_MdcWx5aAHaHY?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
            "https://tse4.mm.bing.net/th/id/OIP.3MB14mkXo6RBSgz0Tw7KCAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("Bosch ICON Wiper Blades", "All-season, 26\" + 20\" set.", "Automotive", "Replacement Parts", 29.99, 50, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP._SSO0pkem7RgkFYAYC_Z6gHaNK?w=115&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.i04swKzcLrLQncw-V2oGxQHaEc?w=307&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.AOugGH_C_DoX48AjjKqP3wHaFs?w=240&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"),
        createProduct("Chemical Guys Microfiber Towels", "Premium, lint-free, 12 pack.", "Automotive", "Car Care", 19.99, 80, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.IuJdE9IpE9nqhtSbb0P4HQHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.TLB7KEKpRE-F620nUUuQRAHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse2.mm.bing.net/th/id/OIP.cOYKHnLx7pRqYSpKFwG4ggHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.5&o=7&rm=3"),
        createProduct("EPAuto Portable Air Compressor", "12V DC, digital tire inflator.", "Automotive", "Tools & Equipment", 32.87, 40, true,
            List.of("Free Size"),
            "https://th.bing.com/th/id/OIP.8_Zw-iFJeoLu0qX6cuRVuQAAAA?w=187&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            "https://tse4.mm.bing.net/th/id/OIP.vYGVLbU9kU3J9IzNJKWtmgHaHg?pid=ImgDet&w=178&h=180&c=7&dpr=1.5&o=7&rm=3",
            "https://tse1.mm.bing.net/th/id/OIP._-5LJDkwMvcB7gj2hZZDJAHaGx?pid=ImgDet&w=178&h=162&c=7&dpr=1.5&o=7&rm=3")
    );

    productRepository.saveAll(products);
}


 private Product createProduct(String name, String description, String category, String subcategory, double price, int stock, boolean active,List<String> sizes, String imageUrl1, String imageUrl2, String imageUrl3) {
  Product product = new Product();
  product.setName(name);
  product.setDescription(description);
  product.setCategory(category);
  product.setSubcategory(subcategory);
  product.setPrice(price);
  product.setStock(stock);
  product.setActive(active);
  product.setImageUrl(imageUrl1);
  product.setImageUrls(Arrays.asList(imageUrl1, imageUrl2, imageUrl3));
  product.setSizes(sizes);
  // Add sizes based on category and subcategory
  if ("Clothing & Fashion".equalsIgnoreCase(category)) {

    if (subcategory.toLowerCase().contains("shoe")
        || subcategory.toLowerCase().contains("sandal")) {

        product.setSizes(Arrays.asList("6", "7", "8", "9", "10", "11", "12"));

    } else if (subcategory.toLowerCase().contains("kurti")
        || subcategory.toLowerCase().contains("dress")
        || subcategory.toLowerCase().contains("saree")
        || subcategory.toLowerCase().contains("jean")
        || subcategory.toLowerCase().contains("t-shirt")
        || subcategory.toLowerCase().contains("jacket")) {

        product.setSizes(Arrays.asList("XS", "S", "M", "L", "XL", "XXL"));
    }
}
  
  return product;
    }
}
