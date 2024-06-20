import Share from "../../components/layouts/panel";
import { FaCalendar, FaClock, FaLocationArrow } from "react-icons/fa";
import LoremParagraph from '../../components/util/texts';
import PricingCard from "../../components/layouts/pricing";

const EventPage = () => {
    return ( 
        <div className="container">
            <h1>Event Page</h1>
            <Share />

            <div className="content">
                <h2>UI/UI SUMMER BOOT CAMP. 2024</h2>
                <p>First edition of the international schools summer <br/> boot camp program</p>
                <div className="spacer-v">
                  <div className="row"><FaCalendar /> <p> Monday, July 22nd - Saturday, July 27th </p></div>
                  <div className="row"><FaClock /> <p>9:00am - 12:00pm, EAT</p></div>
                  <div className="row"><FaLocationArrow /> <p>WoodCreek School, Kamiti Rd, Kiambu</p></div>
                </div>
                <div>
                    <h1>About this Event</h1>
                    <p>{LoremParagraph}</p>
                </div>
                <div>
                    <PricingCard/>
                </div>
            </div>
        </div>  
    );
}
 
export default EventPage;