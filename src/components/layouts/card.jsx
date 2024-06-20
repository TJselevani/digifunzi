import { primaryColor } from "../util/config";
import Panel from "./panel";

const Card = () => {
    const eventTitle = 'Lorem Ipsum dolor sit amet';
    const eventDate = 'Serene Square - August 17, 2023, 8pm';
    return (
        <div className="box-Shadow">
            <Panel/>
            <div className="card" style={{backgroundColor: primaryColor, maxWidth: '542px', maxHeight: '192px'}}>
                <div className="cardTitleContainer"><h1 className="cardTitle"> { eventTitle }</h1></div> 
                <div className="cardParagraphContainer"><p className="cardParagraph">{ eventDate }</p></div>
                <div className="split ">
                    <button className="secondary-button"> Get Ticket </button>
                    <button className="secondary-button"> Explore </button>
                </div>
            </div>
        </div>
    );
}
 
export default Card;