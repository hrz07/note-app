import React from 'react';
import './Note.css'

const Note = () => {
    return (
        <div className='w-75 d-flex justify-content-between mt-5 mx-auto note'>
            <div-1>
                <p>Task Name</p>
            </div-1>
            <div-2>
                <p>Comment</p>
            </div-2>
            <div-3>
            <i class="fas fa-trash"></i>
            </div-3>
        </div>
    );
}

export default Note;
