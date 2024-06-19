import { FaPlusCircle, FaMinus } from "react-icons/fa";

import { useState } from "react";

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
        <div className="split-v">
            <div>
                <button disabled={tickets === 1} onClick={handleDecrement}> <FaMinus/> </button>
                <span> {tickets} </span> 
                <button disabled={tickets === 5} onClick={handleIncrement}> <FaPlusCircle/> </button>
            </div>
            <div className="container">
                <button>Purchase {tickets} tickets * ksh {price}.00</button>
            </div>
        </div>
    );
}
 
export default PricingCard;