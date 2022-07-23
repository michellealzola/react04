import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import StudentList from './components/StudentList';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router >
          <div className="menu">
            <Link className="menuLink" to="/">Home</Link>
            <Link className="menuLink" to="/About">About Us</Link>
            <Link className="menuLink" to="/Contact">Contact Us</Link>
          </div>
          <div className="student-container">
            <StudentList />
          </div>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/About' element={< About />}></Route>
            <Route exact path='/Contact' element={< Contact />}></Route>
          </Routes>
        </Router>
      </div>

    );
  }
}

export default App;
