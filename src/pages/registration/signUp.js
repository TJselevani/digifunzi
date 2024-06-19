import { useState } from "react";

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
            <div>
                <h2>User Registration</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="gridContainer">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
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
                            value={formData.childsSchool} 
                            onChange={handleChange} 
                        />
                    </div>

                    <button className="center" type="submit">Register</button>
                </div>
            </form>
            <p>Already have an account? <a href="/SignIn">Sign In</a></p>
        </div>
    );
}

export default SignUpPage;
