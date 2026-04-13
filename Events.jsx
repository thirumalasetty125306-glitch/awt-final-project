import { Link } from 'react-router-dom';
import { eventsData } from '../constants';

function Events() {
  return (
    <div className="page">
      <h1>📅 Upcoming Events</h1>
      <div className="event-list">
        {eventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>📅 {event.date}</p>
              <p>📍 {event.venue}</p>
              <p className="price-tag">{event.price}</p>
              <Link to={`/events/${event.id}`} className="btn" style={{marginTop: '15px', width: '100%'}}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
