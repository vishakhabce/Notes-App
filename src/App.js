import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Note from "./components/Note/Note";
import Home from "./components/Home/Home";
import { useState,useEffect } from "react";

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))?JSON.parse(localStorage.getItem("notes")):[]);
  const [noteDetail,setNoteDetails] = useState([]);

  useEffect(() => {
    // Update localStorage when notes state changes
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar notes={notes} setNotes={setNotes} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notes/:id" element={<Note notes={notes} />} />
      </Routes>
    </div>
  );
}

export default App;
