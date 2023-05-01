import React from 'react'
import './module.Note.css'
import { useNavigate, useParams } from 'react-router-dom';
import Group from '../group/Group';
import { useState } from 'react';

const Note = ({ notes, setNoteDetails, noteDetail }) => {

  // const navigate = useNavigate();
  const { id } = useParams();
  const note = notes.find(note => note.id === id);

  const [inputText, setInputText] = useState('');

  const handleInput = () => {
    const currentDate = new Date();
    const newNote = {
      text: inputText,
      time: currentDate.toLocaleTimeString(),
      date: currentDate.toLocaleDateString(),
    };
    const updatedNote = {
      ...note,
      noteDetail: [...note.noteDetail, newNote],
    };
    const updatedNotes = notes.map((n) => (n.id === id ? updatedNote : n));
    setNoteDetails(updatedNotes);
    setInputText('');
  };
  return (
    <div className='note-container'>
      <div className='head'>
        <Group title={note.title} color={note.color} />
      </div>
      <div className='message-list'>
      {note.noteDetail.map((note, index) => (
          <div key={index}>
            <p>{note.text}</p>
            <p>{note.time}</p>
            <p>{note.date}</p>
          </div>
        ))}
      </div>
      <div className='msg-container'>
      <textarea
          className='msg-input'
          type='text'
          placeholder='Enter your text here...........'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className='submit-btn' onClick={handleInput}>Submit</button>
      </div>
    </div>
  )
}

export default Note