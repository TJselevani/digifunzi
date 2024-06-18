import { Link } from 'react-router-dom';

const EventCard = ({ events }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <div className="event-preview" key={event.id} >
          <Link to={`/events/${event.id}`}>
            <h2>{ event.title }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default EventCard;