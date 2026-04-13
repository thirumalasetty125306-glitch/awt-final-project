import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Importing Pages
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { user, token, login, logout } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">✨ EVENT HUB</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          {user ? (
            <>
              <span style={{color: '#2ecc71', fontWeight: 'bold'}}>Hi, {user.name}</span>
              <button onClick={logout} className="btn btn-secondary" style={{padding: '5px 15px'}}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className="btn" style={{padding: '8px 20px'}}>Join Us</Link>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail user={user} token={token} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register login={login} />} />
      </Routes>
      
      <footer style={{textAlign: 'center', padding: '40px', color: '#b2bec3', marginTop: '50px'}}>
        &copy; 2026 Event Hub. All rights reserved. Premium Event Management Experience.
      </footer>
    </div>
  );
}

export default App;
