import styles from '../../styles/success.module.css';

const SuccessNotification = () => {
    return ( 
    
        <div className={styles.container}>
            <div className={styles.top}></div>
            <div className={styles.textContainer}>
               <h1> Payment Successful </h1> 
               <p>We are delighted to inform you that we have received your payment.</p>
               <div className={styles.buttonContainer}> <button className='primary-button-v3'>Proceed to the next step</button></div>
            </div>
        </div>
    );
}
 
export default SuccessNotification;