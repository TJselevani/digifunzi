import styles from '../../styles/TicketButton.module.css';
import { FaDownload } from "react-icons/fa";

const TicketDownloadButton = () => {
    return ( 
        <div>
           <div className={styles.row}>
                <div className={styles.content1}>
                    <p>Download Ticket </p> 
                </div>
                <div className={styles.content2}>
                    <div className={styles.icon}><FaDownload/> </div>
                </div>
            </div>
        </div>
     );
}
 
export default TicketDownloadButton;