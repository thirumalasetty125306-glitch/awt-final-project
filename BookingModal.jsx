import { useState } from 'react';
import { API_URL } from '../constants';

function BookingModal({ event, onClose, user, token }) {
  const [tickets, setTickets] = useState(1);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          eventTitle: event.title,
          tickets,
          notes
        })
      });
      const data = await res.json();
      if (res.ok) {
        alert(`🎉 Success! Your booking for ${event.title} is confirmed.`);
        onClose();
      } else {
        alert(data.error || 'Booking failed');
      }
    } catch (err) {
      alert('Could not connect to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-overlay">
      <div className="booking-form">
        <button onClick={onClose} style={{position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer'}}>×</button>
        <h2 style={{marginBottom: '20px'}}>Book: {event.title}</h2>
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={user.name} disabled />
          </div>
          <div className="form-group">
            <label>Tickets</label>
            <input type="number" min="1" max="10" value={tickets} onChange={(e) => setTickets(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Special Requests</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any dietary needs or requests?"></textarea>
          </div>
          <button type="submit" className="btn" style={{width: '100%'}} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
