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

const reportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  homeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Home', required: true },
  reportType: {
    type: String,
    enum: ['free', 'premium'],
    required: true
  },
  pdfUrl: String,
  generatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);

