import Share from "../../components/layouts/panel";
import { FaCalendar, FaClock, FaLocationArrow } from "react-icons/fa";
import LoremParagraph from '../../components/util/texts';
import PricingCard from "../../components/layouts/pricing";
import styles from '../../styles/Event.module.css';
import { eventImage } from '../../components/util/config';

const EventPage = () => {
    const userStyles = { backgroundImage: `url(${eventImage})`, backgroundSize: 'cover', minWidth: '1138px', minHeight: '544px'}
    return ( 
        <div className="container mid">
            <div className={styles.banner} style={{margin: '37px auto'}}>
                <Share userStyles={userStyles}/>
            </div>

            <div className="content">
                <div className={styles.eventTitle}>  <h2>UI/UI SUMMER BOOT CAMP. 2024</h2> </div>
                <div className={styles.eventParagraph}> <p>First edition of the international schools summer <br/> boot camp program</p> </div> 
                <div className={styles.eventSchedule}>
                <div className="spacer-v-left">
                  <div className="row spacer-v"><FaCalendar /> <p> Monday, July 22nd - Saturday, July 27th </p></div>
                  <div className="row spacer-v"><FaClock /> <p>9:00am - 12:00pm, EAT</p></div>
                  <div className="row spacer-v"><FaLocationArrow /> <p>WoodCreek School, Kamiti Rd, Kiambu</p></div>
                </div>
                <br/>
                </div>
                <div className={styles.eventAbout}>
                    <h1>About this Event</h1>
                    <p>{LoremParagraph}</p>
                </div>
                <div className={styles.eventCard}>
                    <PricingCard/>
                </div>
            </div>
        </div>  
    );
}
 
export default EventPage;