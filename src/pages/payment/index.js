import styles from '../../styles/payment.module.css';
import MobileMoney from './mobile-money';
import BankTransfer from './bank-transfer';
import { useState } from 'react';

const PaymentOptions = () => {
    const [selectedPayment, setSelectedPayment] = useState('MobileMoney');

    const handleMobileMoneyClick = () => {
        setSelectedPayment('MobileMoney');
    };

    const handleBankTransferClick = () => {
        setSelectedPayment('BankTransfer');
    };
    return (
        <div className="mid" style={{margin: '7rem auto'}}>
        <div className={styles.paymentCard}>
            <div className={styles.row}>
                <div className={styles.paymentMethod} style={{ display: 'flex', justifyContent: 'center' }}>
                    <button 
                        onClick={handleMobileMoneyClick} 
                        className={`primary-button-v3 ${selectedPayment === 'MobileMoney' ? styles.active : styles.inactive}`} 
                        style={{ width: '450px', height: '126px' }}
                    >
                        Mobile Money
                    </button>
                </div>
                <div className={styles.paymentMethod} style={{ display: 'flex', justifyContent: 'center' }}>
                    <button 
                        onClick={handleBankTransferClick} 
                        className={`primary-button-v3 ${selectedPayment === 'BankTransfer' ? styles.active : styles.inactive}`} 
                        style={{ width: '450px', height: '126px' }}
                    >
                        Bank Transfer
                    </button>
                </div>
            </div>

            {selectedPayment === 'MobileMoney' ? <MobileMoney styles={styles} /> : <BankTransfer styles={styles} />}
        </div>
        <div className='split-h' style={{margin: '50px 0'}}>
                 <div className={styles.button}>
                   <button className='primary-button-v3'>Previous</button>
                </div>
                <div className={styles.button}>
                    <button className='primary-button-v3'>Next</button>
                 </div>

             </div>
        </div>
    );

    // return ( 
    //     <div className="mid" style={{marginTop: '50px'}}>
    //          <div style={{fontSize: 24, margin: '50px'}}>
    //             <h1 style={{marginLeft: '20px'}}>Select Payment Method</h1>
    //         </div>

    //         <div className={styles.paymentCard} >
    //             <div className={styles.row}>
    //                 <div className={styles.paymentMethod} style={{ display: 'flex',justifyContent: 'center'}}>
    //                     <button onClick={pressHandler} className='primary-button-v3' style={{width: '450px', height: '126px'}}> Mobile Money </button> 
    //                 </div>
    //                 <div className={styles.paymentMethod} style={{ display: 'flex',justifyContent: 'center'}}>
    //                     <button className='primary-button-v3' style={{width: '450px', height: '126px'}}>Bank Transfer</button>
    //                 </div>
    //             </div>
            
    //            { payment ? <MobileMoney styles={styles}/> : <BankTransfer styles={styles}/> }
                
    //         </div>
    //         <div className='split-h' style={{margin: '50px 0'}}>
    //             <div className={styles.button}>
    //                 <button className='primary-button-v3'>Previous</button>
    //             </div>
    //             <div className={styles.button}>
    //                 <button className='primary-button-v3'>Next</button>
    //             </div>

    //         </div>
    //     </div>
    //  );
}
 
export default PaymentOptions;