import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import titleimage from '../assets/titleimage.gif'
import ProjectCard from '../componunts/ProjectCard'
import { Link } from 'react-router-dom'




function Home() {

const [loggedin,setLoggedin]=useState(false)
useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setLoggedin(true)
    }else{
        setLoggedin(false)
    }
},{})



  return (
    <div>
        <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
            <h1 style={{color:'red'}}>
                project fair</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quos excepturi velit sapiente ut exercitationem facilis culpa obcaecati reiciendis quia nihil est ad doloribus nobis, aut itaque veniam laboriosam aliquam!</p>
                { loggedin?
                <Link to={'/Dash'}> <Button>Manage your projects</Button></Link>:
               <Link to={'/login'}> <Button>start to exploer</Button></Link>
                }
                </Col>

                <Col sm={12} md={6}>
                                    <img width={'500px'} src={titleimage} alt="" />
                </Col>
        </Row>

<div className='all-projects mt-5'>
    <h1 className='text-center'>explore your projects</h1>
    <marquee>
    <Row className='align-items-center p-5'>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
                </Col>
                <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
                </Col>
                <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
                </Col>
        </Row>
    </marquee>
    <div className='text-center'><Link to={'/Project'}>view more projects</Link></div>

</div>


    </div>
  )
}

export default Home