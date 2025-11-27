import express from "express";
import Song from "../models/songModel.js";

const router = express.Router();

// ➕ Add a new song
router.post("/", async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get all songs (with dance style populated)
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find().populate("danceStyle");
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update song by ID
router.put("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!song) return res.status(404).json({ message: "Song not found" });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete song by ID
router.delete("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ message: "Song not found" });
    res.json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
