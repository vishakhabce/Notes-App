import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Note from "./components/Note/Note";
import Home from "./components/Home/Home";
import { useState } from "react";


function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "Cuvette Notes",
      content: "This is the content of note 1.",
    },
    {
      id: "2",
      title: "My personal grp",
      content: "This is the content of note 2.",
    },
    {
      id: "3",
      title: "Javascript grp",
      content: "This is the content of note 3.",
    }, {
      id: "1",
      title: "Cuvette Notes",
      content: "This is the content of note 1.",
    },
    {
      id: "2",
      title: "My personal grp",
      content: "This is the content of note 2.",
    },
    {
      id: "3",
      title: "Javascript grp",
      content: "This is the content of note 3.",
    }, {
      id: "1",
      title: "Cuvette Notes",
      content: "This is the content of note 1.",
    },
    {
      id: "2",
      title: "My personal grp",
      content: "This is the content of note 2.",
    },
    {
      id: "3",
      title: "Javascript grp",
      content: "This is the content of note 3.",
    },
  ]);
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
