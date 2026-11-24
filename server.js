
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let notes = [
    { id: 1, title: "First Note", content: "This is my first note" },
    { id: 2, title: "Second Note", content: "This is my second note" }
];

// Home route
app.get("/", (req, res) => {
    res.send("Notes REST API is working!");
});

// Get all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Add a new note
app.post("/notes", (req, res) => {
    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

// Update a note
app.put("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(n => n.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    note.title = req.body.title;
    note.content = req.body.content;

    res.json(note);
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(n => n.id !== id);

    res.json({ message: "Note deleted successfully" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
