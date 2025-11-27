// Backend_project/routes/favorites.js

const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
// Placeholder: Replace with the actual path to your middleware
const { verifyUser } = require('../middleware/authMiddleware'); 

// GET: Fetch all saved song IDs for the logged-in user
router.get('/saved', verifyUser, favoritesController.getSavedSongs);

// PUT: Save or Unsave a song by ID
router.put('/saved/:songId', verifyUser, favoritesController.toggleSaveSong);

module.exports = router;