# MarketHub - Database & Backend Setup Guide

## Quick Start

### Prerequisites
- MySQL Server running on localhost:3306
- Java 21 LTS (recently upgraded from Java 17)
- Node.js (for frontend)

### Database Setup

#### Option 1: Using MySQL Command Line

1. **Connect to MySQL:**
```bash
mysql -u root -p
```

2. **Create Database and User:**
```sql
-- Create database
CREATE DATABASE IF NOT EXISTS markethub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create user
CREATE USER 'markethub'@'localhost' IDENTIFIED BY 'Truptir@123';

-- Grant privileges
GRANT ALL PRIVILEGES ON markethub.* TO 'markethub'@'localhost';
FLUSH PRIVILEGES;

-- Verify
SHOW DATABASES;
```

#### Option 2: Using Root User (Simpler)
If you want to use root directly, use these credentials in `application.properties`:
```properties
spring.datasource.username=root
spring.datasource.password=Truptir@123
spring.datasource.url=jdbc:mysql://localhost:3306/markethub
```

### Backend Setup

1. **Navigate to backend:**
```bash
cd d:\markethub\backend
```

2. **Build the project:**
```bash
.\mvnw.cmd clean install
```

3. **Run the backend:**
```bash
.\mvnw.cmd spring-boot:run
```

Expected output:
```
2026-04-26... INFO ... Starting BackendApplication
2026-04-26... INFO ... Tomcat initialized with port 8080
2026-04-26... INFO ... Started BackendApplication in XXX seconds
```

Backend should be running on: **http://localhost:8080**

### Frontend Setup

1. **Navigate to frontend:**
```bash
cd d:\markethub\frontend
```

2. **Install dependencies (first time only):**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

Expected output:
```
VITE v5.4.21 ready in XXXX ms
➜ Local: http://localhost:3000/
```

Frontend is running on: **http://localhost:3000**

## API Endpoints

### Authentication
- `POST /auth/register` - Register new customer
- `POST /auth/register/vendor` - Register new seller
- `POST /auth/login` - User login
- `GET /auth/user/{id}` - Get user details

### Products
- `GET /products` - Get all products
- `GET /products/active` - Get active products
- `GET /products/search?query=...` - Search products
- `GET /products/category/{category}` - Get products by category
- `GET /products/{id}` - Get single product

### Sample Data
- **15 sample products** automatically created on first run
- **Categories:** Electronics, Fashion, Home & Garden, Beauty, Sports
- **Price Range:** $19.99 - $2499.99
- **Stock Levels:** 20-200 units

## Troubleshooting

### Issue: "Access denied for user 'root'@'localhost'"

**Solution:** Check MySQL credentials in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/markethub
spring.datasource.username=root
spring.datasource.password=Truptir@123
```

### Issue: "Database 'markethub' doesn't exist"

**Solution:** Create the database:
```sql
CREATE DATABASE markethub;
```

### Issue: Registration failed

**Possible Causes:**
1. Backend not running (check http://localhost:8080)
2. MySQL not accessible
3. Duplicate email in database

**Solution:** Check backend console for error messages

### Issue: No products showing

**Possible Causes:**
1. DataInitializer hasn't run yet (check backend logs)
2. Products not active (check `active=true` in database)

**Solution:** 
1. Restart backend
2. Check products in database: `SELECT COUNT(*) FROM product;`

## Testing Workflow

1. **Start Backend:**
```bash
cd d:\markethub\backend
.\mvnw.cmd spring-boot:run
```

2. **Start Frontend:**
```bash
cd d:\markethub\frontend
npm run dev
```

3. **Test Registration:**
   - Go to http://localhost:3000/register
   - Fill in: Name, Email, Password, Phone (optional)
   - Click Register
   - Should redirect to login page

4. **Test Login:**
   - Use the email/password you just registered
   - Should redirect to home page

5. **Test Search:**
   - Click search bar
   - Type "phone" or "laptop"
   - Should show matching products

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(20),
  role VARCHAR(50),
  shop_name VARCHAR(255),
  shop_description TEXT,
  shop_image VARCHAR(500),
  vendor_approved BOOLEAN
);
```

### Products Table
```sql
CREATE TABLE product (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  description TEXT,
  price DOUBLE,
  image_url VARCHAR(500),
  category VARCHAR(100),
  stock INT,
  rating DOUBLE,
  review_count INT,
  active BOOLEAN,
  vendor_id BIGINT
);
```

## Notes
- All endpoints support CORS (Cross-Origin Resource Sharing)
- Authentication token is stored in localStorage as 'token'
- Product images use URLs from Unsplash
- Database tables auto-created by Hibernate (if `ddl-auto=update`)
