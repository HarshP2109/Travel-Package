const Package = require('../models/Package');

// Get all packages
exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find({});
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new package
exports.addPackage = async (req, res) => {
  const { name, location, price, description } = req.body;

  if (!name || !location || !price || !description) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newPackage = new Package({ name, location, price, description });
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add package' });
  }
};

// Notify when a package is booked
exports.booked = async (req, res) => {
  try {
    console.log("Package Booked");
    res.status(200).json({message :"Parcel Booked"});
  } catch (error) {
    res.status(500).json({ message: 'Failed to add package' });
  }
};
