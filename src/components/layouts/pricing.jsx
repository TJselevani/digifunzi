import { FaPlusCircle, FaMinus } from "react-icons/fa";

import { useState } from "react";
import styles from '../../styles/PricingCard.module.css';
const PricingCard = () => {
    const [tickets, setTickets] = useState(1);
    const [price, setPrice] = useState(12000);

    const handleIncrement = () => {
        setPrice(prevCount => prevCount + 12000);
        setTickets(prevCount => prevCount + 1);
      };
    const handleDecrement = () => {
        setPrice(prevCount => prevCount > 1 ? prevCount - 12000 : 12000);
        setTickets(prevCount => prevCount > 1 ? prevCount - 1 : 1)
      };
    return ( 
        <div className={styles.card}>
            <div className={styles.buttonContainer}>
                <button className="icon" style={{color: 'black', border: '2px solid transparent'}} disabled={tickets === 1} onClick={handleDecrement}> <FaMinus/> </button>
                <span> {tickets} </span> 
                <button  className="icon" style={{color: 'black', border: '2px solid transparent'}} disabled={tickets === 5} onClick={handleIncrement}> <FaPlusCircle/> </button>
            </div>
            <div >
                <button className='primary-button-v2' style={{borderRadius: '13px'}}>Purchase {tickets} tickets * ksh {price}.00</button>
            </div>
        </div>
    );
}
 
export default PricingCard;