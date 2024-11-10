const express = require('express');
const router = express.Router();
const { getPackages, addPackage, booked } = require('../controllers/packageController');

// To get all packages
router.get('/packages', getPackages);

// To add a new package
router.post('/packages', addPackage);

// For Booked Package
router.post('/booked', booked);

module.exports = router;
