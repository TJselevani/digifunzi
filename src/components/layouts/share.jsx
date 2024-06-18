import { FaHeart, FaShare } from "react-icons/fa";

const Share = () => {
    return ( 
        <div className="card1">
            <div className="split card1Item">
                <FaHeart style={{color: 'red', fontSize: '50px'}} />
                <FaShare style={{color: 'green', fontSize: '50px'}} />
            </div>
        </div>
    );
}
 
export default Share;