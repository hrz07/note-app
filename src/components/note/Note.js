import React from 'react';
import './Note.css'

const Note = ({name,comment,id,deleteNote}) => {


    return (
        <div className='w-75 d-flex justify-content-between mb-2 mt-5 mx-auto note'>
            <div className='p-1'>
                <p className='mx-3 text-warning'>Task Name</p>
                <p className='text-light' >{name}</p>
            </div>
            <div className='p-1'>
                <p className='text-warning'>Comment</p>
                <p className='text-light'  >{comment}</p>
            </div>
            <div>
            <i  onClick={()=>deleteNote(id)} className="fas fa-trash text-danger"></i>
            </div>
        </div>
    );
}

export default Note;
