import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page" style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>🎉 Experience Extraordinary Events</h1>
      <p style={{fontSize: '1.4rem', color: '#b2bec3', marginBottom: '40px'}}>Discover, Book, and Enjoy the best events in your city with premium service.</p>
      <Link to="/events" className="btn" style={{padding: '15px 40px', fontSize: '1.2rem'}}>Explore Now</Link>
    </div>
  );
}

export default Home;
