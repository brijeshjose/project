import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideDashboard}) {
  return (
    <div>
    <Navbar className="bg-info">
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:'none',color:'white'}}> icon  Project Fair</Link></Navbar.Brand>
        {insideDashboard &&
<button className='btn align-items-right border'>Logout</button>
}
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Header