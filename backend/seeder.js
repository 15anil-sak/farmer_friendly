const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const Scheme = require('./models/schemeModel');
const User = require('./models/userModel');

dotenv.config();

const products = [
  {
    name: 'Neem Oil Pesticide',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=400',
    brand: 'Organic Agri',
    category: 'Pesticides',
    description: '100% pure cold pressed neem oil. Effective against over 200 species of chewing or sucking insects.',
    price: 450,
    countInStock: 50,
  },
  {
    name: 'NPK 19:19:19 Fertilizer',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400',
    brand: 'IFFCO',
    category: 'Fertilizers',
    description: 'Water soluble fertilizer for balanced growth of all crops.',
    price: 1200,
    countInStock: 20,
  },
  {
    name: 'Manual Hand Weeder',
    image: 'https://images.unsplash.com/photo-1617576621334-92736173d132?q=80&w=400',
    brand: 'AgriTools',
    category: 'Tools',
    description: 'Ergonomic design for easy weeding between rows.',
    price: 350,
    countInStock: 15,
  }
];

const schemes = [
  {
    title: 'PM-Kisan Samman Nidhi',
    description: 'Direct income support of ₹6,000 per year to all landholding farmer families.',
    eligibility: 'All landholding farmers.',
    benefits: '₹2,000 every 4 months.',
    category: 'Income Support',
  },
  {
    title: 'Kisan Credit Card (KCC)',
    description: 'Timely credit support to farmers for their cultivation and other needs.',
    eligibility: 'All farmers, including tenant farmers and oral lessees.',
    benefits: 'Low interest loans up to ₹3 lakh.',
    category: 'Credit',
  }
];

const seedData = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Scheme.deleteMany();
    await User.deleteMany({ email: 'admin@example.com' });
    
    // Create default admin user
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123', // Hook will handle hashing
      isAdmin: true,
      phone: '+919876543210'
    });

    const sampleProducts = products.map(p => ({ ...p, user: admin._id }));
    await Product.insertMany(sampleProducts);
    await Scheme.insertMany(schemes);
    console.log('Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Seeding Error: ', error);
    process.exit(1);
  }
};

seedData();
