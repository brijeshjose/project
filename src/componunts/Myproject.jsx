import React from 'react'
import Addprojects from './Addprojects'

function Myproject() {
  return (
    <div className='card shadow p-3 mt-3'>
        <div className='d-flex'>
            <h2>My Projects</h2>
            <div className="ms-auto">
                <Addprojects/>
            </div>

        </div>
<div className="mt-4">
    <div className="border d-flex align-items-center round p-2">
        <h5>Project title</h5>
        <div className="icon ms-auto">
            <button className='btn'><i class="fa-solid fa-pen-to-square"></i> </button>
            <button className='btn'><i class="fa-brands fa-github"></i> </button>
            <button className='btn'><i class="fa-solid fa-trash"></i> </button>
        </div>
    </div>
    <p className='text-danger fs-5 fw-bolder'> No projects uploaded yet!!!</p>
</div>

    </div>
  )
}

export default Myproject