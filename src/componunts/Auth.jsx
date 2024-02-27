import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { loginAPI, registerAPI } from '../services/allAPI'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Auth({Register}) {
    const navigate=useNavigate()
    const isRegisterForm=Register?true:false
    const[userData,setUserData]=useState({
        username:"",email:"",password:""
    })

    const handleRegister=async(e)=>{
        e.preventDefault()
        const {username,email,password}=userData
        if(!username||!email||!password){
            alert("please fill the missing fields")
        }else{
            const result= await registerAPI(userData)
            console.log(result);
            if(result.status==200){
                console.log(result);
                alert(`${result.data.username} has successfully registered`)
                setUserData({
                    username:"",email:"",password:""
                })
                navigate('/Login')
            }else{
                alert(result.response.data)
                console.log(result);
            }
        }
    }
const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userData
    if(!email || !password) {
        alert("Please fill the missing field")
    }else{
        const result=await loginAPI(userData)
        console.log(result);
       if(result.status===200){
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setUserData({
            email:"",password:""
        })
     navigate('/Dash')
    }else{
        alert(result.response.data)
        console.log(result);
    }

}}

  return (
    <>
    <div style={{width:'100',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className="container w-75">
            <Link to={'/'} style={{textDecoration:'none',color:'blue'}}>Back to Home</Link>

            <div className='card shadow p-3 bg-info'>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/hd/9d048261029043.5a60d07f2b8b2.gif' alt='' className='rounded-start w-100'/>

                    </div>
                    <div className="col-lg-6">
                        <div className='d-flex align-items-center flex-column'>
                            <h2 className='fw-bolder text-light mt-2'>
                            <i class="fa-solid fa-laptop-file fa-beat-fade"></i> Project Fair

                            </h2> 
                            <h5 className='fw-bolder text-light pb-3 mt-5'>
                               {
                                 isRegisterForm?'sign up to your Account':'sign in to your Account'

                               }
                            </h5>
                            <Form className='text-light w-100'>
                            {

                    isRegisterForm &&
                    <Form.Group className="mb-3" controlId="formBasicName">

                       <Form.Control type="text" placeholder="Enter user name" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/>

                      </Form.Group>


}
<Form.Group className="mb-3" controlId="formBasicEmail">

<Form.Control type="text" placeholder="Enter Email"  value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">

<Form.Control type="text" placeholder="Enter Password"  value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />

</Form.Group>
{
isRegisterForm?
<div>
<button className='btn btn-light mb-2'onClick={handleRegister}>Register</button>
<p>Already have an account?click here <Link to={'/login'} style={{textDecoration:'none',color:'blue'}}>Login</Link></p>
</div>:
<div>
    <button className='btn btn-light mb-2' onClick={handleLogin}>Login</button>
    <p>New user?click here to<Link to={'/register'} style={{textDecoration:'none',color:'red'}}>Register</Link></p>
</div> 
}
 </Form>

                        </div>

                    </div>


                </div>
            </div>

        </div> 

    </div>
    </>
  )
}

export default Auth