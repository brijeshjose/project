import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPI';
function Addprojects() {
   const[projectDetails,setProjectDetails]=useState({
    title:"",language:"",overview:"",github:"",websites:"",projectImage:""

   })

const[preview,setPreview]=useState("")
const[token,setToken]=useState("")
 console.log(projectDetails);
    const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  setProjectDetails({
    title:"",language:"",overview:"",github:"",websites:"",projectImage:""
  })
  setPreview("")
  }
  const handleShow = () => setShow(true);


useEffect(()=>{
  if(projectDetails.projectImage){
    setPreview(URL.createObjectURL(projectDetails.projectImage))
  }

},[projectDetails.projectImage])

useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }else{
    setToken("")
  }
},[])



const handleAdd = async(e)=>{
  e.preventDefault()
  const {title,language,overview,github,websites,projectImage}=projectDetails
  if(!title||!language||!overview||!github||!websites||!projectImage){
      alert("please fill empty fields")
  }else{
    const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("language",language)
    reqBody.append("overview",overview)
    reqBody.append("github",github)
    reqBody.append("projectImage",projectImage)


   if(token){
    const reqHeader={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
    const result=await addProjectAPI(reqBody,reqHeader)
    if(result.status===200){
      console.log(result.response.data);
      handleClose()
      alert("Project added Successfully")
    }else{
      console.log(result.data);
      console.log(result.response.data);
    }
   }
  }
}

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
            <div className="col-6">
             <label>
                <input type='file' style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                <img width={'300px'}  src={preview?preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveOe74OGOVi9Z0NJohgG0O2_KtMFY8cPHEnSXXCxmcg&s'}alt='imgplace'/>

             </label>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <input type='text' className='form-control' placeholder='project title'value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <input type='text' className='form-control' placeholder='Language used'value={projectDetails.language} onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <input type='text' className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <input type='text' className='form-control' placeholder='Website link'value={projectDetails.websites} onChange={e=>setProjectDetails({...projectDetails,websites:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <input type='text' className='form-control' placeholder='Project overview'value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                </div>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addprojects