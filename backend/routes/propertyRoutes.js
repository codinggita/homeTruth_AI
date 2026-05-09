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


const express = require('express');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

router
  .route('/')
  .get(propertyController.getAllProperties)
  .post(propertyController.createProperty);

router
  .route('/:id')
  .get(propertyController.getProperty)
  .patch(propertyController.updateProperty)
  .delete(propertyController.deleteProperty);

module.exports = router;

