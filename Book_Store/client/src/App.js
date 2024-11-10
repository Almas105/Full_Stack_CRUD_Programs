import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Link, Route, Routes} from 'react-router-dom';
import AddBook from './pages/AddBook';
import SearchBook from './pages/SearchBook';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';
import ViewBooks from './pages/ViewBooks';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/add">Add Book</Link></li>
            <li><Link to="/search">Search Book</Link></li>
            <li><Link to="/update">Update Book</Link></li>
            <li><Link to="/delete">Delete Book</Link></li>
            <li><Link to="/view">View Book</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add" element={ <AddBook/>}/>
          <Route path="/search" element={ <SearchBook/>}/>
          <Route path="/update" element={ <UpdateBook/>}/>
          <Route path="/delete" element={ <DeleteBook/>}/>
          <Route path="/view" element={ <ViewBooks/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
