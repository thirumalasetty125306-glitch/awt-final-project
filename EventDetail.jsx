import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { eventsData } from '../constants';
import BookingModal from '../components/BookingModal';

function EventDetail({ user, token }) {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === parseInt(id));
  const [showBooking, setShowBooking] = useState(false);
  const navigate = useNavigate();

  if (!event) return (
    <div className="page">
      <h2>Event not found!</h2>
      <Link to="/events" className="btn">Go Back</Link>
    </div>
  );

  const handleBookClick = () => {
    if (!user) {
      alert('Please login to book tickets.');
      navigate('/login');
    } else {
      setShowBooking(true);
    }
  };

  return (
    <div className="page">
      <div className="detail-container">
        <img src={event.image} alt={event.title} className="detail-image" />
        <div className="detail-content">
          <h2>{event.title}</h2>
          <div className="detail-meta">
            <p>📅 <strong>Date:</strong> {event.date}</p>
            <p>📍 <strong>Venue:</strong> {event.venue}</p>
            <p>💰 <strong>Price:</strong> {event.price}</p>
            <p style={{marginTop: '20px', lineHeight: '1.6'}}>{event.description}</p>
          </div>
          <button className="btn" onClick={handleBookClick} style={{fontSize: '1.1rem', padding: '15px 40px'}}>
            Book Tickets Now
          </button>
          <div style={{marginTop: '20px'}}>
            <Link to="/events" style={{color: '#b2bec3', textDecoration: 'none'}}>← Back to List</Link>
          </div>
        </div>
      </div>
      {showBooking && <BookingModal event={event} user={user} token={token} onClose={() => setShowBooking(false)} />}
    </div>
  );
}

export default EventDetail;
