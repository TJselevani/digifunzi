import styles from '../styles/Ticket.module.css';
import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Ticket = ({initiateDownload}) => {
    const ticketRef = useRef();

    const downloadTicket = async () => {
        const canvas = await html2canvas(ticketRef.current);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("ticket.pdf");
    };

    useEffect(() => {
        if (initiateDownload) {
            downloadTicket();
        }
    }, [initiateDownload]);

    return ( 
        <div ref={ticketRef} className={styles.ticketCard}>
            <div className={styles.row1}>
                <p>ID: AO123456789#</p>
                <h1>Your Ticket</h1>
            </div> 
            
            <div className={styles.row2}>
                <div className={styles.col1}>
                    <h2>UI/UX <br/>SUMMER BOOT CAMP</h2>
                    <div className={styles.content}>
                        <p>Parent's Name: </p>
                        <p>Child's Name: </p>
                        <p>Venue: </p>
                        <p>Phone Number: </p>
                        <p>Child's School: </p>     
                        <p>Time: </p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.footText}>
                        <ol className={styles.list}>
                            <li className={styles.listItem}>The QR Code can only be scanned/validated once. Do not share the ticket with other individual.</li>
                            <li className={styles.listItem}>The ticket must be produced by the holder at the time of entry into the event grounds.</li>
                            <li className={styles.listItem}>Entry will be refused if the QR Code has been tampered with or if this ticket has been torn, defaced, damaged or tampered with in any way.</li>
                            <li className={styles.listItem}>This ticket is valid for the number of persons indicated above.</li>
                            <li className={styles.listItem}>This ticket only entitles the holder to access the area of the event grounds in which the activity is taking place.</li>
                        </ol>
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.info}>
                        <h3>July</h3>
                        <h4>22 - 27</h4>
                        <h3>2024</h3>
                    </div>
                    <div className={styles.QRcode}>
                        QR Code
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Ticket;
