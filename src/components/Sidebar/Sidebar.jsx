import React from 'react';
import { Link } from 'react-router-dom';
import './module.Sidebar.css'
import Group from '../group/Group';
import plusIcon from '../../assets/+plus.png'
import { useState } from 'react';
import Modal from '../modal/Modal';

const Sidebar = ({ notes, setNotes }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  console.log(notes)

  return (
    <div className='Sidebar'>
       <Modal isOpen={modalIsOpen} onClose={handleModalClose} note={notes} setNote={setNotes} />
      <div className='title'>Pocket Notes</div>
      <div className='create-btn' onClick={handleModalOpen}>
        <img src={plusIcon} alt="plus" />
        <span className='btn-text'>Create Notes Group</span>
      </div>
      <div className='group-list'>
        {notes?.map((note) => (
          <Link key={note.id} to={`/notes/${note.id}`}>
            <Group title={note.title} color ={note.color} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;