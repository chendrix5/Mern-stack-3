
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import Login from './components/Login'
import Signup from './components/Signup'



function App() {

  return (

    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
