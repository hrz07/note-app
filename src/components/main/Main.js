import React from 'react';
import './Main.css'
import Note from '../note/Note';

const Main = () => {
    return (
        <div className='Main_template'>
            <div className='w-50  mx-auto d-flex flex-column'>
                <input className=' my-2 form-control  mt-5 mb-2' type="text" placeholder='Enter Name...' />
                <textarea className='form-control mb-2' name="task" id="" cols="30" rows="10" placeholder='Task Name...'></textarea> 
                <button className='btn btn-success w-25 mb-2'>Add Item</button>            
            </div>
            
            <Note/>
        </div>
    );
}

export default Main;
