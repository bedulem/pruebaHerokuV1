import express, { application } from "express";
// const express = require("express");
import notes from "./notes.js";
import cors from "cors";

const app = express();

app.use(cors());

// const notes = [
//   { id: 1, description: "una descripción 1", value: 200 },
//   { id: 2, description: "una descripción 2", value: 500 },
//   { id: 3, description: "una descripción 3", value: 800 },
//   { id: 4, description: "una descripción 4", value: 100 },
// ];

app.get("/", (request, response) => {
  response.send("<h1> Hello world</h1>");
  console.log("Hello world");
});

app.get("/api/notes", (request, response) => {
  console.log("/api/notes");
  response.status(200).json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log("/api/notes/:id");
  const note = notes.find((note) => note.id === id);
  response.json(note);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
