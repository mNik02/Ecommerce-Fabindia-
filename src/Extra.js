

import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file or include the styles directly here

const Dropdown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-btn">Dropdown</button>
      {isDropdownVisible && (
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">Item 1</a>
          <a href="#" className="dropdown-item">Item 2</a>
          <a href="#" className="dropdown-item">Item 3</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;




import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
 
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', credentials);
            console.log(response.data);
            alert('Login successful');
            // Redirect or perform any action after successful login
        } catch (error) {
            console.error('Login failed', error);
            alert('Incorrect credentials. Please try again.');
        }
    };
 
    return (
        <>
        <Header/>
        
        <main className='formbody'>
        <div className='customer-form'>
            <form  className="form-container" onSubmit={handleSubmit}>
            <h1 className='Outer'>Register</h1>
            <br></br>
            <p>Welcome to FabIndia!</p>
                <div>
                    
                    <input
                        type="text"
                        name="email"
                        value={credentials.email}
                        placeholder='Email Address'
                        onChange={handleChange}
                        required
                        
                    />
                    <hr></hr>
                </div>
                <br></br>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder='Password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <p>Forgot password?</p>
                <br></br>
                <input className='Submitbtn' type="submit" value="Login"/>
            </form>
            <br></br>
            <Link to="/register"><p className='existingp'>Not a Registered user? <br></br>Sign Up</p></Link>
            </div>
        </main>
       <Footer/>
        </>
    );
};
 
export default Login;

import React from 'react';
import '../Assets/Css/Registration.css';

const FloatingForm = () => {
    return (
        <form>
            <div className="form-group">
                <input type="text" id="firstName" name="firstName" required />
                <label htmlFor="firstName">First name *</label>
            </div>
            <div className="form-group">
                <input type="text" id="lastName" name="lastName" required/>
                <label for="lastName">Last name *</label>
            </div>
            <div className="form-group">
                <input type="text" id="phoneNumber" name="phoneNumber" required />
                <label for="phoneNumber">Phone Number *</label>
            </div>
            <div className="form-group">
                <input type="email" id="email" name="email" required />
                <label for="email">Email address *</label>
            </div>
            <div className="form-group">
                <input type="password" id="password" name="password" required />
                <label for="password">Password *</label>
            </div>
            <div className="form-group">
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <label for="confirmPassword">Confirm password *</label>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};









import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import "../../src/Assets/Css/Registration.css";
import Header from "../Components/Header/Header.js"
const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile_No: "",
    dateOfBirth: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name regex: Alphabets only
    const nameRegex = /^[A-Za-z]+$/;
    // Email regex: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Mobile regex: 10 digits
    const mobileRegex = /^\d{10}$/;
    // Password regex: 8-16 characters, one uppercase, one lowercase, one digit, one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = "Invalid characters in First Name";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = "Invalid characters in Last Name";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.mobile_No.trim()) {
      errors.mobile_No = "Mobile Number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile_No)) {
      errors.mobile_No = "Invalid mobile number format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Password must be 8-16 characters with one uppercase, one lowercase, one digit, and one special character";
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
      isValid = false;
    } else {
      // Date of Birth validation: Check if the user is at least 10 years old
      const currentDate = new Date();
      const userDateOfBirth = new Date(formData.dateOfBirth);
      const yearsDiff =
        currentDate.getFullYear() - userDateOfBirth.getFullYear();

      if (yearsDiff < 10) {
        errors.dateOfBirth = "You must be at least 10 years old";
        isValid = false;
      }
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/register",
          formData
        );
        console.log("Registration response:", response.data);
        alert("Account Created Successfully");
      } catch (error) {
        console.error("Registration error:", error.message);
        // Handle registration errors
      }
    }
  };

  return (
  
    <Container className="mt-5 input">
      <Form onSubmit={handleSubmit}>
      
        <FloatingLabel
          for="floatingFirstName"
          label="First name*"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          /><br></br>
          {validationErrors.firstName && (
            <p style={{ color: "red" }}>{validationErrors.firstName}</p>
          )}
          
        </FloatingLabel>
        <br></br>
        <FloatingLabel
          controlId="floatingLastName"
          label="Last Name"
          className="mb-3"
          required
        ></FloatingLabel>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          {validationErrors.lastName && (
            <p style={{ color: "red" }}>{validationErrors.lastName}</p>
          )}
        
        
        <FloatingLabel
          controlId="floatingEmail"
          label="Email"
          className="mb-3"
          required
        >
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          {validationErrors.email && (
            <p style={{ color: "red" }}>{validationErrors.email}</p>
          )}
        </FloatingLabel><br></br>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
          required
        >
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          /><br></br>
          {validationErrors.password && (
            <p style={{ color: "red" }}>{validationErrors.password}</p>
          )}
        </FloatingLabel><br></br>

        <FloatingLabel
          controlId="floatingMobileNo"
          label="Mobile Number"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            name="mobile_No"
            value={formData.mobile_No}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
          {validationErrors.mobile_No && (
            <p style={{ color: "red" }}>{validationErrors.mobile_No}</p>
          )}
        </FloatingLabel>
      
        <FloatingLabel
          controlId="floatingDateOfBirth"
          label="Date of Birth"
          className="mb-3"
          required
        >
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            required
/>
          {validationErrors.dateOfBirth && (
            <p style={{ color: "red" }}>{validationErrors.dateOfBirth}</p>
          )}
        </FloatingLabel>
        
        <Button type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </Container>
    
  );
};

export default Registration;


export default FloatingForm;