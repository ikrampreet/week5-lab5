const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getPhonebooks,
  createPhonebook,
  getPhonebook,
  deletePhonebook,
  patchPhonebook,
  putPhonebook,
} = require("./controllers/myControllers.js");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
// GET a single Phonebook
app.get("/api/Phonebook/:id", getPhonebook);
// DELETE a Phonebook
app.delete("/api/Phonebook/:id", deletePhonebook);
// Update Phonebook using PATCH
app.patch("/api/books/:id", patchPhonebook);
// Update Phonebook using PUT
app.put("/api/Phonebook/:id", putPhonebook);
// Add a new Phonebook
app.post("/api/Phonebooks", createPhonebook);
// GET all Phonebooks
app.get("/api/Phonebooks", getPhonebooks);



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});