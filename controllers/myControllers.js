const Phonebook = require("../models/myModel.js");

// Create a new Phonebook
const createPhonebook = async (req, res) => {
  try {
    const { title, snippet, body } = req.body;
    if (!title || !snippet || !body) {
      return res
        .status(400)
        .json({ error: "All fields (title, snippet, body) are required" });
    }

    const newPhonebook = new Phonebook({ title, snippet, body });
    const savedPhonebook = await newPhonebook.save();

    res.status(201).json(savedPhonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all Phonebooks
const getPhonebooks = async (req, res) => {
  try {
    const phonebooks = await Phonebook.find();
    res.json(Phonebooks);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single Phonebook by ID
const getPhonebook = async (req, res) => {
  try {
    const Phonebook = await Phonebook.findById(req.params.id);
    if (!Phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }
    res.json(Phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a Phonebook by ID
const deletePhonebook = async (req, res) => {
  try {
    const Phonebook = await Phonebook.findByIdAndDelete(req.params.id);
    if (!Phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }
    res.json({ message: "Phonebook deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single Phonebook by ID
const patchPhonebook = async (req, res) => {
  try {
    const Phonebook = await Phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!Phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }

    res.json(Phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single Phonebook by ID
const putPhonebook = async (req, res) => {
  try {
    const Phonebook = await Phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!Phonebook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }

    res.json(Phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPhonebook,
  getPhonebooks,
  getPhonebook,
  deletePhonebook,
  patchPhonebook,
  putPhonebook,
};