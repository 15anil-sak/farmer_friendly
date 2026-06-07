const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcryptjs');
const { MongoMemoryServer } = require('mongodb-memory-server');

// Import models for auto-seeding
const Product = require('../models/productModel');
const Scheme = require('../models/schemeModel');
const User = require('../models/userModel');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

let mongoServer;

const seedFallbackData = async () => {
  try {
    // Clean start for In-Memory DB
    await User.deleteMany({});
    await Product.deleteMany({});
    await Scheme.deleteMany({});

    console.log('Seeding admin user...');
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123',
      isAdmin: true,
      phone: '+919876543210'
    });

    console.log('Seeding products...');
    const products = await Product.insertMany([
      { name: 'Neem Oil Pesticide', image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=400', brand: 'Organic Agri', category: 'Pesticides', description: '100% pure cold pressed neem oil.', price: 450, countInStock: 50, user: admin._id },
      { name: 'NPK 19:19:19 Fertilizer', image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400', brand: 'IFFCO', category: 'Fertilizers', description: 'Water soluble fertilizer.', price: 1200, countInStock: 20, user: admin._id }
    ]);
    console.log(`Seeded ${products.length} products.`);

    console.log('Seeding schemes...');
    const schemes = await Scheme.insertMany([
      { title: 'PM-Kisan Samman Nidhi', description: 'Direct income support of ₹6,000 per year.', eligibility: 'All landholding farmers.', benefits: '₹2,000 every 4 months.', category: 'Income Support' },
      { title: 'Kisan Credit Card (KCC)', description: 'Timely credit support to farmers.', eligibility: 'All farmers.', benefits: 'Low interest loans up to ₹3 lakh.', category: 'Credit' }
    ]);
    console.log(`Seeded ${schemes.length} schemes.`);

    console.log('In-Memory DB Auto-Seeded with Test Data.');
  } catch (error) {
    console.error('Auto-seed failed:', error);
  }
};

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    // Clear any existing connections
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`Atlas connection failed: ${error.message}`);
    console.warn('Falling back to In-Memory Database for testing purposes...');
    
    try {
      if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
      }
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      
      await mongoose.connect(uri);
      console.log(`In-Memory MongoDB Connected: ${uri}`);
      await seedFallbackData();
    } catch (innerError) {
      console.error(`In-Memory DB connection failed: ${innerError.message}`);
    }
  }
};

module.exports = connectDB;
