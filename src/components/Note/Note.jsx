import React from 'react'
import './module.Note.css'
import { useNavigate, useParams } from 'react-router-dom';
import Group from '../group/Group';
import { useState,useEffect } from 'react';
import fly from '../../assets/Vectorfly.png';
import back from '../../assets/Vectorback.png';

const Note = ({ notes, setNoteDetails, noteDetail }) => {

  // const navigate = useNavigate();
  const { id } = useParams();
  const note = notes.find(note => note.id === id);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      const sidebar = document.querySelector('.Sidebar');
      sidebar.style.display = 'none';
    } else {
      const sidebar = document.querySelector('.Sidebar');
      sidebar.style.display = 'flex';
    }
  }, [])

  const handleInput = () => {

    if (inputText === '') return;
    const currentDate = new Date();
    const newNote = {
      text: inputText,
      time: currentDate.toLocaleTimeString(),
      date: currentDate.toLocaleDateString('en-US', options),
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
        <div className='back-btn' onClick={() => window.history.back()}>
          <img src={back} alt="back" />
        </div>
        <Group title={note.title} color={note.color} />
      </div>
      <div className='message-list'>
        {note.noteDetail.map((note, index) => (
          <div className='note-value' key={index}>
            <div className='time'>
              <p>{note.time}</p>
              <p>{note.date}</p>
            </div>
            <div className='note-text'>{note.text}</div>
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
        <div className='submit-btn' onClick={handleInput}>
          <img src={fly} alt="fly" />
        </div>
      </div>
    </div>
  )
}

export default Note