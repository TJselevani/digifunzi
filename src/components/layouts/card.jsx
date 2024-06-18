import Share from "./share";

const Card = () => {
    const eventTitle = 'Lorem Ipsum dolor sit met';
    const eventDate = 'Serene Square - August 17, 2023, 8pm';
    return (  
        <div className="card">
            <Share/>
            <h1> { eventTitle }</h1>
            <p>{ eventDate }</p>
            <div className="split-h">
                <button> Get Ticket </button>
                <button> Explore </button>
            </div>

        </div>
    );
}
 
export default Card;