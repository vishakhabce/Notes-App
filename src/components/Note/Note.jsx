import React from 'react'
import './module.Note.css'
import { useNavigate, useParams } from 'react-router-dom';
import Group from '../group/Group';

const Note = ({ notes, match }) => {

  // const navigate = useNavigate();
  const { id } = useParams();
  const note = notes.find(note => note.id === id);

  console.log(note)
  return (
    <div className='note-container'>
      <div className='head'>
        <Group title={note.title} color={note.color} />
      </div>
      <div className='message-list'>

      </div>
      <div className='msg-container'>
        <textarea className='msg-input' type="text" placeholder='Enter your text here...........' />
      </div>
    </div>
  )
}

export default Note