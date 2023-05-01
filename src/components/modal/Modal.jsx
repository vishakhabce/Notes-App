import React, { useState } from 'react';
import './module.Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  const handleCreate = () => {
    // Do something with the title and color values
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>Create New Notes Group</div>
        <label htmlFor="title">Group Name</label>
        <input type="text" id="title" value={title} placeholder='Enter your group name....' onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="color">Choose color</label>
        <div className="color-chooser">
          <span className="color-circle red" onClick={() => setColor('red')}></span>
          <span className="color-circle green" onClick={() => setColor('green')}></span>
          <span className="color-circle blue" onClick={() => setColor('blue')}></span>
        </div>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};

export default Modal;
