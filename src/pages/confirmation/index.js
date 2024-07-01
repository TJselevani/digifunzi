
import Share from '../../components/layouts/panel';
import { eventImage } from "../../components/util/config";
import styles from '../../styles/confirmation.module.css';
import DownloadTicketButton from '../../components/layouts/DownloadTicketBtn';
import { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import Ticket from '../../components/ticket';

const ConfirmationPage = () => {
    const [initiateDownload, setInitiateDownload] = useState(false);

    const handleDownloadClick = () => {
        setInitiateDownload(true);
    };

    const bind = useGesture({
        onTap: () => {
          handleDownloadClick();
        },
      });
      <Ticket initiateDownload={initiateDownload}/>

    const userStyles = { backgroundImage: `url(${eventImage})`, backgroundSize: 'cover', minWidth: '1138px', minHeight: '544px'}
    return (
        <div className="mid" style={{maxWidth: '', padding: '10px', marginTop: '50px'}}>
            <div style={{fontSize: 24}}>
                <h1 style={{marginLeft: '20px'}}>Thank You For Registering!</h1>
            </div>
            <div className="card1" style={{margin: '30px 20px', maxWidth: '50px'}}> 
                <Share userStyles={userStyles}/>
            </div>

            <div className={styles.paragraphContainer}>
                <p>We have successfully received your ticket purchase order. A confirmation email will be sent to you shortly with all the event details. As the event date approaches, you will receive a reminder email with the event information. Please download your ticket from the link below or find it attached in your confirmation email. Bring a printout or digital copy of your ticket to the event for entry</p>
            </div>

            <div className={styles.ticketContainer}>
            <div className="split">
                <div className={styles.content}>
                    <h2>Ticket Summary</h2>
                    <p>Ticket Number: {'A0123456789#'}</p>
                    <p>Date of Purchase: {'22nd July 2024'}</p>
                    <p>Total: KES {12000}</p>
                    <p>Payment Method: {'Mobile Money'}</p>
                    <p>Status: {'Completed'}</p>
                </div>
                <div className={styles.content}>
                    <h2>Billing Details</h2>
                    <p>Name: {'John Doe'}</p>
                    <p>Email: {'johndoe@gmail.com'}</p>
                    <p>Phone Number: (+254){701234567}</p>
                    <p>Child's Name: {'John Doe Jr'}</p>
                    <p>Child's School: {'School Academy'}</p>
                </div>
                </div>
            </div>

            <DownloadTicketButton {...bind()}/>

           
        </div> 
     );
}
 
export default ConfirmationPage;