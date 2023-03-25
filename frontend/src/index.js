import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reviews from "./components/Reviews"
import Nav from './components/Nav'

function App() {

  return (

    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;