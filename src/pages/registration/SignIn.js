import { useState } from "react";
import styles from '../../styles/signIn.module.css';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        emailAddress: '',
        password: ''
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
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        placeholder="Enter your password"
                                        value={formData.password} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <button className="primary-button-v3" style={{width: '100%', marginTop: '50px' }} type="submit">Sign In</button>
                        </form>
                    </div>
                    <div style={{margin: '50px 0 50px 30px', fontSize: '20px'}}>
                        <p>Don't have an account? <a href="/SignUp">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
