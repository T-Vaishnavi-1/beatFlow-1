// Backend_project/controllers/favoritesController.js

const User = require('../models/User'); 

// 1. Function to ADD or REMOVE a song
exports.toggleSaveSong = async (req, res) => {
    const { songId } = req.params; 
    const userId = req.userId; // Set by your authentication middleware

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized. User not logged in.' });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const index = user.savedSongs.indexOf(songId);

        if (index > -1) {
            // Song is saved -> REMOVE (Unsave)
            user.savedSongs.splice(index, 1);
            await user.save();
            return res.status(200).json({ 
                message: 'Song unsaved successfully', 
                isSaved: false 
            });
        } else {
            // Song is not saved -> ADD (Save)
            user.savedSongs.push(songId);
            await user.save();
            return res.status(200).json({ 
                message: 'Song saved successfully', 
                isSaved: true 
            });
        }

    } catch (error) {
        console.error('Error toggling saved song:', error);
        res.status(500).json({ message: 'Server error during save operation.' });
    }
};


// 2. Function to FETCH all saved song IDs for the user
exports.getSavedSongs = async (req, res) => {
    const userId = req.userId; 

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized. User not logged in.' });
    }

    try {
        const user = await User.findById(userId).select('savedSongs'); 

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json(user.savedSongs);

    } catch (error) {
        console.error('Error fetching saved songs:', error);
        res.status(500).json({ message: 'Server error during fetch operation.' });
    }
};