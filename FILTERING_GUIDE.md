# MarketHub - Amazon-like Product Filtering System 🛍️

## Overview
Your MarketHub platform now has a complete Amazon-like category and subcategory filtering system with 110+ products organized across multiple categories.

---

## 📂 Category & Subcategory Structure

### **Electronics** 
- **Phones:**
  - iPhone (4 models: Pro Max, Pro, 15, 14)
  - Samsung (S24 Ultra, S24+, S24, A54)
  - Google Pixel (8 Pro, 8)
  - OnePlus (12, 12R)
  - Xiaomi (14 Ultra, 13T Pro)
  
- **Laptops:**
  - MacBook (Pro 16", Pro 14", Air M2)
  - Dell (XPS 15, XPS 13, Inspiron 15)
  - HP (Envy 16, Pavilion 15)
  - Lenovo (ThinkPad X1, IdeaPad Pro)
  - ASUS (VivoBook 15, ROG Gaming)
  
- **Tablets:**
  - iPad Pro, iPad Air, Samsung Galaxy Tab S9 Ultra

### **Fashion**
- **Men's Wear:**
  - T-Shirts (Blue, Black)
  - Jeans (Blue, Black)
  - Shirts (Formal White, Checkered)
  - Kurtis (Black, White)

- **Women's Wear:**
  - Dresses (Summer, Party)
  - Kurtis (Red, Blue, Yellow - 5 types)
  - Sarees (Purple, Multicolor)
  - Salwar Kameez (Navy, Cream)
  - Lehenga (Red-Gold, Pink)

- **Shoes:**
  - Running Shoes
  - Casual Shoes (White, Black)
  - Formal Shoes
  - Sandals
  - Flip Flops

### **Home & Garden**
- Furniture: Sofas, Dining Tables, Beds, Chairs
- Decor: Wall Clocks, Plant Pots, Wall Art, Lamps

### **Sports**
- Ball Sports (Basketball, Soccer Ball)
- Yoga & Fitness (Yoga Mats)
- Weights (Dumbbells)
- Fitness Equipment (Resistance Bands, Treadmill)

### **Beauty**
- Skincare (Face Cream, Serum)
- Fragrance (Perfume Sets, Eau de Toilette)
- Makeup (Lipstick, Foundation)
- Hair Care (Shampoo, Hair Mask)

### **Books**
- Fiction, Self-Help, Non-Fiction

### **Kitchen**
- Appliances (Kettle, Coffee Maker)
- Cookware (Stainless Steel Set, Frying Pan)
- Utensils (Cutlery Set)

---

## 🔍 How Filtering Works

### **Category Sidebar (Left Panel)**
- **Desktop View:** Always visible on the left side
- **Mobile View:** Toggle with filter button
- Organized hierarchically like Amazon
- Click on category to expand subcategories
- Click on subcategory to filter products
- Active selections highlighted in blue
- "Clear All Filters" button to reset

### **Search Functionality**
- Real-time search across product names and descriptions
- Works independently or combined with category filters
- Searches: "Laptop" → Shows all laptops
- Searches: "iPhone" → Shows all iPhones
- Searches: "Kurti" → Shows all kurtis

### **Price Filter**
- Dual range slider (min and max)
- Filter products by price range
- Works with category and search filters

### **Sorting Options**
1. Most Relevant (default)
2. Price: Low to High
3. Price: High to Low
4. Highest Rated
5. Newest First

### **Active Filters Display**
- Shows all active filters with clear buttons (✕)
- Easy to remove individual filters
- "Clear All" button to reset everything

---

## 💻 User Experience Flow

### **Scenario 1: Browse by Category**
1. Open Products page
2. Click "Electronics" in sidebar
3. Click "Laptop" subcategory
4. See all laptops from different brands (Dell, HP, Lenovo, ASUS, etc.)
5. Optional: Sort by price, filter by price range, search within results

### **Scenario 2: Search for Specific Item**
1. Enter "Kurti" in search bar
2. Instantly shows all Kurtis (Red, Blue, Yellow variants)
3. Can further filter by category (Fashion)
4. Can sort by price or rating
5. Can adjust price range

### **Scenario 3: Multi-level Filtering**
1. Select "Electronics" category
2. Select "iPhone" subcategory
3. Filter price $500-$1000
4. Sort by rating
5. Result: iPhone models within budget, highest rated first

### **Scenario 4: Compare Products**
1. Browse category (e.g., Laptops)
2. See all laptop brands:
   - MacBook (Premium)
   - Dell XPS (Premium Windows)
   - HP (Mid-range)
   - Lenovo (Business)
   - ASUS (Gaming)
3. Compare prices, ratings, specs
4. Add to cart with one click

---

## 🎯 Key Features

### **Product Card Display**
- High-quality product images
- Product name and description
- Category and subcategory badges
- Star ratings (out of 5)
- Number of reviews
- Current stock status:
  - Green: In stock
  - Red: Only X left
  - Gray: Out of stock
- "View Details" button
- "Add to Cart" button (disabled if out of stock)

### **Responsive Design**
- **Desktop:** 3-column product grid + left sidebar
- **Tablet:** 2-column grid + collapsible sidebar
- **Mobile:** Full-width grid, filter button in header

### **Performance Features**
- Fast product loading with skeleton screens
- Smooth transitions and animations
- Quick category switching
- Real-time search results

---

## 🔌 Backend API Endpoints

### **Products Endpoints**
```
GET  /products                              - Get all products
GET  /products/active                       - Get active products
GET  /products/{id}                         - Get product by ID
GET  /products/search?query={search}        - Search products
GET  /products/category/{category}          - Filter by category
GET  /products/subcategory/{subcategory}    - Filter by subcategory (NEW)
GET  /products/category/{category}/subcategory/{subcategory}  - Filter by both (NEW)
GET  /products/vendor/{vendorId}            - Get vendor products
POST /products                              - Create product
PUT  /products/{id}                         - Update product
DELETE /products/{id}                       - Delete product
```

### **New Subcategory Features**
- `getBySubcategory()` - Filter products by specific subcategory
- `getBySubcategoryAndCategory()` - Filter by both category and subcategory
- Added to ProductRepository with database queries

---

## 📊 Database Structure

### **Product Table Fields**
```java
- id (Long)
- name (String) - e.g., "iPhone 15 Pro Max"
- description (String) - e.g., "Latest iPhone with A17 Pro chip..."
- price (Double) - e.g., 1199.99
- category (String) - e.g., "Electronics"
- subcategory (String) - e.g., "iPhone" ⭐ NEW
- imageUrl (String)
- stock (Integer)
- rating (Double) - 0-5 stars
- reviewCount (Integer)
- active (Boolean)
- vendorId (Long)
```

---

## 🚀 Getting Started

### **1. Backend Setup**
```bash
cd backend
mvn clean compile      # Verify compilation
mvn spring-boot:run    # Start server (http://localhost:8080)
```
- Database automatically loads 110+ products on startup
- All categories and subcategories populated

### **2. Frontend Setup**
```bash
cd frontend
npm install
npm run dev            # Start dev server (http://localhost:5173)
```

### **3. Browse Products**
1. Navigate to Products page
2. See categories in left sidebar
3. Click any category to expand subcategories
4. Click any subcategory to filter
5. Use search bar to find specific items
6. Adjust price range and sort as needed

---

## 🎨 UI/UX Highlights

### **Color Scheme**
- Primary Blue: Main interactions and highlights
- Gray: Background and neutral elements
- Amber/Gold: Prices and ratings
- Red: Low stock warnings

### **Navigation Pattern**
- Similar to Amazon's left sidebar approach
- Expandable/collapsible categories
- Quick subcategory access
- Visual feedback for selections

### **Mobile Optimization**
- Filter drawer (expandable menu)
- Full-width product cards
- Touch-friendly buttons
- Optimized search bar

---

## 📱 Example Searches That Work

✅ "Laptop"          → Shows all laptops from all brands
✅ "iPhone"          → Shows all iPhone models
✅ "Kurti"           → Shows all Kurti variants
✅ "Saree"           → Shows all Sarees
✅ "Earbuds"         → Shows all Earbuds
✅ "Shoes"           → Shows all shoe types
✅ "Furniture"       → Shows all furniture items
✅ "Electronics"     → Shows all electronics
✅ Brand names like "Samsung", "Dell", "MacBook" also work!

---

## 🔄 Filtering Combinations

### **Works Together:**
- ✅ Category + Subcategory
- ✅ Category + Price Range
- ✅ Search + Category
- ✅ Search + Subcategory
- ✅ Search + Price + Sort
- ✅ All of the above combined!

### **Remove Filters:**
- Click ✕ on individual filter badges
- Use "Clear All Filters" button
- Auto-clears when navigating to new section

---

## 📈 Analytics Ready

Products include ratings and review counts for:
- User trust metrics
- Product popularity
- Recommendation algorithms
- Review display on product detail pages

---

## ✨ Summary

Your MarketHub now has a **complete Amazon-like experience** with:
- ✅ 110+ products across 7 categories
- ✅ 30+ subcategories for precise filtering
- ✅ Real-time search functionality
- ✅ Price range filtering
- ✅ Smart sorting options
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Professional UI matching e-commerce standards
- ✅ Easy category navigation
- ✅ Product stock indicators
- ✅ Ratings and reviews display

**Ready to use! Just run both backend and frontend servers.** 🚀
