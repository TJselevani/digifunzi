import { FaHeart, FaShare } from "react-icons/fa";
import { image3 } from "../util/config";

const Panel = () => {
    return ( 
        <div className="panel fill-h" style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', minWidth: '541px', minHeight: '248px' }}>
            <div className="split panelItem">
                <FaHeart className="icon" style={{color: '#F70808'}} />
                <FaShare className="icon" style={{color: '#000000'}} />
            </div>
        </div>
    );
}
 
export default Panel;