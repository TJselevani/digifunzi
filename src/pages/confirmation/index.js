import { FaDownload } from "react-icons/fa";
const ConfirmationPage = () => {
    return (
        <div style={{maxWidth: '70%', border: 'solid 1px red', padding: '10px'}}>
            <div>
                <h1> Confirmation Page </h1>
                <h2>Thank You For Registering!</h2>
            </div>
            <div className="card1">

            </div>
            <div>
                <p>We have successfully received your ticket purchase order. A confirmation email will be sent to you shortly with all the event details. As the event date approaches, you will receive a reminder email with the event information. Please download your ticket from the link below or find it attached in your confirmation email. Bring a printout or digital copy of your ticket to the event for entry</p>
            </div>
            <div className="split">
                <div>
                    <h1>Ticket Summary</h1>
                    <p>Ticket Number: {'A0123456789#'}</p>
                    <p>Date of Purchase: {'22nd July 2024'}</p>
                    <p>Total: KES {12000}</p>
                    <p>Payment Method: {'Mobile Money'}</p>
                    <p>Status: {'Completed'}</p>
                </div>
                <div>
                    <h1>Billing Details</h1>
                    <p>Name: {'John Doe'}</p>
                    <p>Email: {'johndoe@gmail.com'}</p>
                    <p>Phone Number: (+254){701234567}</p>
                    <p>Child's Name: {'John Doe Jr'}</p>
                    <p>Child's School: {'School Academy'}</p>
                </div>
            </div>
           <span>Download Ticket <button> <FaDownload/> </button></span> 
        </div> 
     );
}
 
export default ConfirmationPage;