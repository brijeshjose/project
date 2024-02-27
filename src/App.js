import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dash from './pages/Dash';
import Project from './pages/Project';
import Footer from './componunts/Footer';
import Auth from './componunts/Auth';


function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Auth/>}/>
      <Route path='/Register' element={<Auth Register/>}/>
      <Route path='/Dash' element={<Dash/>}/>
      <Route path='/Project' element={<Project/>}/>
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
