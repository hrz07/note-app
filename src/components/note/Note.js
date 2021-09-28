import React from 'react';
import './Note.css'

const Note = () => {
    return (
        <div className='w-75 d-flex justify-content-between mb-3 mt-5 mx-auto note'>
            <div className='p-1'>
                <p className='mx-3 text-warning'>Task Name</p>
            </div>
            <div className='p-1'>
                <p className='text-warning'>Comment</p>
            </div>
            <div>
            <i  class="fas fa-trash text-danger"></i>
            </div>
        </div>
    );
}

export default Note;
