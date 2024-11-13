import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddTicket from './pages/AddTicket';
import ViewTicket from './pages/ViewTicket';
import UpdateTicket from './pages/UpdateTicket';
import DeleteTicket from './pages/DeleteTicket';
import GetTicket from './pages/GetTicket';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/add">Add Ticket</Link></li>
          <li><Link to="/view">Search Ticket</Link></li>
          <li><Link to="/update">Update Ticket</Link></li>
          <li><Link to="/delete">Delete Ticket</Link></li>
          <li><Link to="/get">View  All Tickets</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/add" element={<AddTicket />} />
        <Route path="/view" element={<ViewTicket />} />
        <Route path="/update" element={<UpdateTicket />} />
        <Route path="/delete" element={<DeleteTicket />} />
        <Route path="/get" element={<GetTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
