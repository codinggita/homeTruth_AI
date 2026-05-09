/**
 * @project     Home Truth AI
 * @author      Kamlesh Chandela
 * @copyright   © 2026 Kamlesh Chandela. All Rights Reserved.
 * @license     Proprietary — Unauthorized use strictly prohibited.
 * @contact     kamlesh.b.chandela.cg@gmail.com
 *
 * This file is part of Home Truth AI — an original work by Kamlesh Chandela.
 * Copying, modification, redistribution, training AI, or using the 
 * ideas/logic of this work in any project or company is strictly prohibited.
 */


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  location: { type: String },
  intent: { 
    type: String, 
    enum: ['Buy', 'Rent', 'Invest', 'none'],
    default: 'none'
  },
  password: { type: String, required: true },
  googleId: { type: String },
  avatar: { type: String },
  role: { 
    type: String, 
    enum: ['user', 'admin', 'provider'], 
    default: 'user' 
  },
  resetOTP: String,
  resetOTPExpire: Date,
  preferences: {
    budgetMin: Number,
    budgetMax: Number,
    preferredCities: [String],
    homeTypes: [String],
    familySize: String,
    lifestyle: String,
    notificationsEnabled: { type: Boolean, default: true }
  },
  savedHomes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Home' }],
  viewedHomes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Home' }],
  isActive: { type: Boolean, default: true },
  lastLogin: Date,
  serviceCategory: { type: String },
  experience: { type: Number, default: 0 },
  jobsCompleted: { type: Number, default: 0 },
  baseFee: { type: Number, default: 0 }
}, { 
  timestamps: true,
  strict: false 
});

userSchema.pre('save', async function() {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

