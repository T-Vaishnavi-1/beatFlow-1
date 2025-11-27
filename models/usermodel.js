import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  // ➡️ NEW FIELD FOR PERSISTENT SAVED SONGS
  savedSongs: [{
    type: String, // Stores the unique ID of each saved song
  }]
}, {
  timestamps: true, 
});

const User = mongoose.model("User", userSchema);
export default User;