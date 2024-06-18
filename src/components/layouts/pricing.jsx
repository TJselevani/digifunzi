import { FaPlusCircle, FaMinus } from "react-icons/fa";

import { useState } from "react";

const PricingCard = () => {
    const [tickets, setTickets] = useState(1);
    const [price, setPrice] = useState(12000);
    return ( 
        <div className="split-v">
            <div>
                <button > <FaPlusCircle/> </button>
                {tickets}
                <button> <FaMinus/> </button>
            </div>
            <div className="container">
                <button>Purchase {tickets} tickets * ksh {price}.00</button>
            </div>
        </div>
    );
}
 
export default PricingCard;