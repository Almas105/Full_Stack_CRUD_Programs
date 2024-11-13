import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SearchStudent from './pages/SearchStudent';
import ViewStudent from './pages/ViewStudent';
import DeleteStudent from './pages/DeleteStudent';
import UpdateStudent from './pages/UpdateStudent';
function App() {
  return (
  <Router>
    <Container>
      <Navbar>
        <Navbar.Brand>Student Enroll System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/add"className="ms-3">Add Student</Nav.Link>
          <Nav.Link as={Link} to="/search" className="ms-3">Search Student</Nav.Link>
          <Nav.Link as={Link} to="/view" className="ms-3">View Student</Nav.Link>
          <Nav.Link as={Link} to="/delete" className="ms-3">Delete Student</Nav.Link>
          <Nav.Link as={Link} to="/update" className="ms-3">Update Student</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
    <Container>
      <Routes>
        <Route path="/add" element={<AddStudent/>}/>
        <Route path="/search" element={<SearchStudent/>}/>
        <Route path="/view" element={<ViewStudent/>}/>
        <Route path="/delete" element={<DeleteStudent/>}/>
        <Route path="/update" element={<UpdateStudent/>}/>
      </Routes>
    </Container>
  </Router>
  );
  }
  

export default App;
