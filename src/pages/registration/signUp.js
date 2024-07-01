import { useState } from "react";
import styles from '../../styles/Register.module.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        childsName: '',
        childsSchool: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit formData to your desired endpoint
        console.log(formData);
    };

    return (
        <div>
            <div className="mid">
            <div className={styles.formContainer}>
            <div style={{padding: '20px 30px'}}>
            <form onSubmit={handleSubmit}>
                <div className="gridContainer">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            placeholder="John"
                            value={formData.firstName} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            placeholder="Doe" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <label htmlFor="emailAddress">Email Address</label>
                        <input 
                            type="email" 
                            id="emailAddress" 
                            name="emailAddress" 
                            placeholder="Johndoe@hotmail.com"
                            value={formData.emailAddress} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input 
                            type="text" 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            placeholder="(+254)753748596"
                            value={formData.phoneNumber} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <label htmlFor="childsName">Child's Name</label>
                        <input 
                            type="text" 
                            id="childsName" 
                            name="childsName" 
                            placeholder="Surname Jr"
                            value={formData.childsName} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <label htmlFor="childsSchool">Child's School</label>
                        <input 
                            type="text" 
                            id="childsSchool" 
                            name="childsSchool" 
                            placeholder="School Academy"
                            value={formData.childsSchool} 
                            onChange={handleChange} 
                        />
                    </div>
                   
                   
                    
                </div>
                <button className=" primary-button-v3" style={{width: '100%', marginTop: '50px' }} type="submit">Register</button>
            </form>
            
            </div>
            <div style={{margin: '50px 0 50px 30px', fontSize: '20px'}}>
                <p>Already have an account? <a href="/SignIn">Sign In</a></p>
            </div>
            </div>
            </div>
        </div>
    );
}

export default SignUpPage;
