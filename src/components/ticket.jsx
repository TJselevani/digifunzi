import styles from '../styles/Ticket.module.css';

const Ticket = () => {
    return ( 
        <div className={styles.ticketCard}>
            <div className={styles.row1}>
                <p>ID: AO123456789#</p>
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
                    <div className={styles.footText}>
                        <p>1. The QR Code can only be scanned/validated once. Do not share the ticket with other individual.</p>
                        <p>2. The ticket must be produced by the holder at the time of entry into the event grounds.</p>
                        <p>3. Entry will be refused if the QR Code has been tampered with or if this ticket has been torn, defaced, damaged or tampered with in any way.</p>
                        <p>4. This ticket is valid for the number of persons indicated above.</p>
                        <p>5. This ticket only entitles the holder to access the area of the event grounds in which the activity is taking place.</p>
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