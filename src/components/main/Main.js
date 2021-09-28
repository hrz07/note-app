import React,{useState} from 'react';
import './Main.css'
import Note from '../note/Note';

const Main = () => {


    const [data,setData] = useState({
        name : '',
        comment : ''
    })
    const [note,setNote] = useState([])

    const inputHandller = (event)=>{
        const {value,name} = event.target;
        setData((previousData)=>{
            return{
                ...previousData,
                [name]: value
            }
        })
    }

    const submitNote = (e) =>{
        e.preventDefault();
        setNote([...note,data]);
        setData({
            name : '',
            comment : ''
        });
    }

    const deleteNote = (id)=>{
        let newList = [...note];
        newList.splice(id,1);
        setNote(newList);
       
    }

    
    return (
        <div className='Main_template'>
         <p className='text-light' >{note.length>0 ? `You have ${note.length} note ` : `You haven't any note` }</p>  
            <div className='w-50  mx-auto d-flex flex-column'>
                <input onChange={inputHandller} autoComplete='off' name='name' value={data.name} className=' my-2 form-control  mt-5 mb-2' type="text" placeholder='Enter Name...' />
                <textarea onChange={inputHandller} name='comment' value={data.comment} className='form-control mb-2' id="" cols="30" rows="10" placeholder='Task Name...'></textarea> 
                <button onClick={submitNote} className='btn btn-success  w-25 my-2'>Add Item</button>            
            </div>
            
            {
                note.map((dt,index)=>{
                    return <Note name={dt.name}  comment={dt.comment} key={index} id={index} deleteNote={deleteNote} />
                })
            }
        </div>
    );
}

export default Main;
