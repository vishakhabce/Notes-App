import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Note from "./components/Note/Note";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

function App() {
  // Get notes from localStorage or set empty array
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes"))
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );

  useEffect(() => {
    // Update localStorage when notes state changes
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      {/* Sidebar component */}
      <Sidebar notes={notes} setNotes={setNotes} />
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/notes/:id"
          element={
            <Note notes={notes} setNoteDetails={setNotes} noteDetail={notes} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
