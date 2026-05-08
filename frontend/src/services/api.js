import axios from 'axios';

const API_BASE = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  registerVendor: (vendorData) => api.post('/auth/register/vendor', vendorData),
  login: (email, password) => api.post('/auth/login', { email, password }),
  getUser: (id) => api.get(`/auth/user/${id}`),
};

// Product API
export const productAPI = {
  getAll: () => api.get('/products'),
  getActive: () => api.get('/products/active'),
  getById: (id) => api.get(`/products/${id}`),
  search: (query) => api.get(`/products/search?query=${query}`),
  getByCategory: (category) => api.get(`/products/category/${category}`),
  getBySubcategory: (subcategory) => api.get(`/products/subcategory/${subcategory}`),
  getBySubcategoryAndCategory: (category, subcategory) => 
    api.get(`/products/category/${category}/subcategory/${subcategory}`),
  getVendorProducts: (vendorId) => api.get(`/products/vendor/${vendorId}`),
  create: (productData) => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: (id) => api.delete(`/products/${id}`),
};

// Order API
export const orderAPI = {
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  create: (orderData) => api.post('/orders', orderData),
};

export default api;
