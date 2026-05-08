# MarketHub Frontend - Amazon-Like E-Commerce Platform

## Overview
A fully redesigned frontend with professional e-commerce features including:
- Amazon-like design and user interface
- Product search functionality
- Category browsing
- Vendor/Seller registration
- Customer registration with redirect to login
- Responsive design
- Shopping cart
- Product filtering and sorting

## Key Features Implemented

### 1. **Modern Navigation Bar** 
- **File**: `frontend/src/components/layout/Navbar.jsx`
- Sticky header with search bar
- Logo with branding
- User authentication dropdown menu
- Shopping cart badge
- Mobile responsive menu
- Vendor dashboard link for sellers
- Search functionality integrated

### 2. **Professional Homepage**
- **File**: `frontend/src/pages/Home.jsx`
- Hero section with call-to-action
- Search bar in prominent position
- Trust badges (Free Delivery, Secure Shopping, Fast Checkout)
- Banner carousel with promotional deals
- Category browsing grid (8 categories)
- Featured products section with ratings
- Seller registration CTA

### 3. **Customer Registration Page**
- **File**: `frontend/src/pages/auth/Register.jsx`
- Full name, email, phone, and password fields
- Password confirmation validation
- Form validation
- Redirects to login after successful registration
- Link to vendor registration
- Modern gradient design

### 4. **Vendor/Seller Registration Page**
- **File**: `frontend/src/pages/auth/VendorRegister.jsx`
- Personal information section
- Shop information section
  - Shop name, description, address
  - Business license (optional)
- Separate vendor registration flow
- Terms agreement notice
- Link back to customer registration

### 5. **Login Page**
- **File**: `frontend/src/pages/auth/Login.jsx`
- Email and password authentication
- Forgot password link
- Redirect from registration with success message
- Links to register as customer or seller
- Modern card-based design

### 6. **Advanced Products Page**
- **File**: `frontend/src/pages/products/Products.jsx`
- Search functionality with query parameters
- Category filtering
- Price range slider
- Minimum rating filter
- Multiple sorting options:
  - Most Relevant
  - Price (Low to High)
  - Price (High to Low)
  - Highest Rated
  - Newest First
- Mobile responsive filters
- Product grid display with:
  - Product image/emoji
  - Category badge
  - Star ratings with review count
  - Original and discounted prices
  - Discount percentage

### 7. **Routing Updates**
- **File**: `frontend/src/App.jsx`
- Added vendor registration route: `/register/vendor`
- All routes properly configured
- Navigation structure maintained

## Design Features

### Color Scheme
- Primary: Blue (#2563eb)
- Secondary: Orange (#f97316)
- Gradient backgrounds for visual appeal
- Clean white cards with shadows

### Components Used
- Lucide React icons for modern UI
- Responsive grid layouts
- Hover effects and transitions
- Loading states
- Empty states with helpful messages

### User Experience
- Search functionality on every page
- Persistent navigation
- Intuitive filtering
- Clear call-to-actions
- Mobile-first responsive design
- Smooth transitions and animations

## Sample Data Included

### Product Categories
1. Electronics 📱
2. Fashion 👗
3. Home & Garden 🏠
4. Sports ⚽
5. Books 📚
6. Toys & Games 🎮
7. Beauty 💄
8. Automotive 🚗

### Sample Products (12 products)
- Premium Wireless Headphones ($99.99)
- Ultra-Slim Laptop Stand ($29.99)
- Portable Phone Charger ($34.99)
- Smart Watch Series 5 ($199.99)
- Organic Skincare Set ($45.99)
- Stainless Steel Water Bottle ($24.99)
- Premium Running Shoes ($120.00)
- Designer Backpack ($89.99)
- Yoga Mat Premium ($39.99)
- Bluetooth Speaker ($59.99)
- Coffee Maker ($79.99)
- LED Desk Lamp ($34.99)

## Authentication Flow

### Customer Registration Flow
1. User visits `/register`
2. Fills in details (name, email, phone, password)
3. System redirects to `/login?registered=true`
4. Success message displayed
5. User logs in with credentials

### Vendor Registration Flow
1. User visits `/register/vendor`
2. Fills in personal information
3. Fills in shop information
4. System redirects to `/login?registered=true&vendor=true`
5. User logs in and can access vendor dashboard

### Login Flow
1. User enters email and password
2. On success, redirected to home page
3. User info stored in context
4. Navigation menu updates

## Search & Filter Features

### Search
- Real-time search on products
- URL parameter preservation (`?search=query`)
- Highlights matching products

### Filters
- **Category**: Radio buttons for single selection
- **Price Range**: Dual sliders (min/max)
- **Rating**: Minimum rating filter (0, 3+, 4+)
- **Sorting**: Dropdown with 5 options
- **Mobile**: Collapsible filter panel

## Technical Implementation

### Technologies Used
- React 18+ with hooks
- React Router v6
- Lucide React (icons)
- Tailwind CSS (styling)
- Context API (state management)

### File Structure
```
frontend/
├── src/
│   ├── components/
│   │   └── layout/
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── VendorRegister.jsx
│   │   ├── products/
│   │   │   ├── Products.jsx
│   │   │   └── ProductDetail.jsx
│   │   ├── cart/
│   │   │   └── Cart.jsx
│   │   └── vendor/
│   │       └── Dashboard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## API Integration Points

### Authentication APIs
- `authAPI.register(userData)` - Customer registration
- `authAPI.registerVendor(vendorData)` - Vendor registration
- `authAPI.login(email, password)` - User login

### Product APIs (Ready for backend integration)
- `productAPI.search(query)` - Search products
- `productAPI.getByCategory(category)` - Filter by category
- `productAPI.getActive()` - Get all active products
- `productAPI.getAll()` - Get all products

## Next Steps for Backend Integration

1. **Update API Endpoints**: Modify `frontend/src/services/api.js` to match your backend URLs
2. **Implement Product APIs**: Create endpoints for:
   - Product search
   - Category filtering
   - Product details
   - Product listing
3. **Vendor Dashboard**: Build vendor product management page
4. **Order Management**: Create order checkout and management pages
5. **Payment Integration**: Add payment gateway
6. **User Profile**: Implement user profile management

## Responsive Breakpoints

- **Mobile**: < 768px (max-width: 767px)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive with:
- Mobile-first approach
- Touch-friendly buttons and inputs
- Optimized spacing for all screens
- Collapsible menus on mobile

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- Product reviews and ratings system
- Wishlist/Save for later
- Product comparison
- Advanced search filters
- Product recommendations
- User reviews and ratings
- Order tracking
- Customer support chat
- Notification system
- Analytics dashboard for vendors
