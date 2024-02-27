import React, { useEffect, useState } from 'react'
import Header from '../componunts/Header'
import { Col, Row } from 'react-bootstrap'
import Myproject from '../componunts/Myproject'
import Profile from '../componunts/Profile'

function Dash() {
const [username,setUsername]=useState("")

useEffect(()=>{
  if(sessionStorage.getItem("existingUser")){
    setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
  }

},[])

  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}}>
        <Col sm={12} md={8}>
          <h2> Welcome <span className='text-warning'>{username}</span> </h2>
          <Myproject/>
        </Col>
        
        <Col sm={12} md={4}>
         <Profile/>
        </Col>
        </Row>
    </>
  )
}

export default Dash