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


require('dotenv').config();
const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: String,
    address: String,
    rent: Number
});

const Property = mongoose.model('Property', PropertySchema);

async function checkProperties() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const properties = await Property.find({});
        console.log('Total Properties:', properties.length);
        properties.forEach(p => console.log(`- ${p.title} (${p.address})`));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

checkProperties();

