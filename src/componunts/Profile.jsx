import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='card shadow p-5 mt-2 me-2  align-items-right'>
        <div className='d-flex justify-content-between'>
            <h1>Profile</h1>
            <button  onClick= {() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>

        </div>
        <Collapse in={open}>
        <div className="row justify-content center mt-3">
        <label>
            <input type='file'style={{display:'none'}}/>
            <img width={'200px'} height={'200px'} className='rounded-circle' src='https://i.pinimg.com/564x/3c/73/ee/3c73ee8caf56fcc08bd11d595dca167d.jpg'/>
        </label>
        <div className="mt-3">
            <input type="text" className='form-control' placeholder='Github link'/>
            <input type="text" className='form-control' placeholder='Linked in link'/>
        </div>
        <div className='mt-3 text-align-center d-grid'>
            <button className='btn btn-warning'>update</button>
        </div>

        </div>
        </Collapse>
    </div>
    
    </>
  )
}

export default Profile