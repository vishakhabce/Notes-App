import React, { useState } from 'react';
import './module.Modal.css';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ isOpen, onClose, note, setNote }) => {

    const [title, setTitle] = useState('');

    const colorList = [
        '#B38BFA',
        '#FF79F2',
        '#43E6FC',
        '#F19576',
        '#0047FF',
        '#6691FF'
    ]
    const [color, setColor] = useState('');

    const handleCreate = () => {
        setNote([...note, {
            id: uuidv4(),
            title: title,
            color: color,
            noteDetail: []
        }])
        setTitle('')
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal-text'>Create New Notes Group</div>
                <div className='title-wrapper'>
                    <label htmlFor="title" className='modal-text'>Group Name</label>
                    <input className='input-title' type="text" id="title" value={title} placeholder='Enter your group name....' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='color-wrapper'>
                    <label htmlFor="color" className='modal-text'>Choose color</label>
                    <div className="color-chooser">
                        {
                            colorList.map((item) => (
                                <span key={item} className={`color-circle `} style={{ backgroundColor: item }} onClick={() => setColor(item)}></span>
                            ))
                        }
                    </div>
                </div>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default Modal;
