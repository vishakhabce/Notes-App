import React, { useState } from 'react';
import './module.Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    const handleCreate = () => {
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal-text'>Create New Notes Group</div>
                <div className='title-wrapper'>
                <label htmlFor="title" className='modal-text'>Group Name</label>
                <input type="text" id="title" value={title} placeholder='Enter your group name....' onChange={(e) => setTitle(e.target.value)} />
                </div>
               <div className='color-wrapper'>
               <label htmlFor="color" className='modal-text'>Choose color</label>
                <div className="color-chooser">
                    <span className="color-circle red" onClick={() => setColor('red')}></span>
                    <span className="color-circle green" onClick={() => setColor('green')}></span>
                    <span className="color-circle blue" onClick={() => setColor('blue')}></span>
                </div>
               </div>
                <button  onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default Modal;
