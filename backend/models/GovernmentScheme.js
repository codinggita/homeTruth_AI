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

const governmentSchemeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['central', 'state', 'tax', 'special'],
    required: true
  },
  state: String,
  benefitAmount: String,
  benefitType: {
    type: String,
    enum: ['subsidy', 'tax_deduction', 'direct_benefit']
  },
  eligibility: {
    minIncome: Number,
    maxIncome: Number,
    firstTimeBuyer: Boolean,
    category: { type: String, enum: ['EWS', 'LIG', 'MIG', 'general'] }
  },
  deadline: Date,
  documents: [String],
  applicationLink: String,
  status: {
    type: String,
    enum: ['active', 'expired', 'coming_soon'],
    default: 'active'
  },
  description: String
}, { timestamps: true });

module.exports = mongoose.model('GovernmentScheme', governmentSchemeSchema);

