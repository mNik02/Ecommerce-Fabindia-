import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Assets/Css/Registration.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Form } from "react-bootstrap";
import { IMAGES, TEXTS } from "../Assets/Static/Constants";
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile_No: "",
    dateofBirth: "",
  });

  const [otpData, setOtpData] = useState({
    email: "",
    otp: "",
  });

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  const [form, setform] = useState("registration"); // Registration step
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtpData({ ...otpData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name regex: Alphabets only
    const nameRegex = /^[A-Za-z]+$/;
    // Email regex: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Mobile regex: 10 digits
    const mobileRegex = /^[6-9]\d{9}$/;
    // Password regex: 8-16 characters, one uppercase, one lowercase, one digit, one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    // Valid FirstName
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = "Invalid characters in First Name";
      isValid = false;
    }
    // Valid LastName
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = "Invalid characters in Last Name";
      isValid = false;
    }
    // Valid Email
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
    // Valid Mobile number
    if (!formData.mobile_No.trim()) {
      errors.mobile_No = "Mobile Number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile_No)) {
      errors.mobile_No = "Invalid mobile number format";
      isValid = false;
    }
    // Valid Password
    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "must contain 8-16 characters with one {[A-Z],[a-z],special character}";
      isValid = false;
    }

    // Valid DOB
    if (!formData.dateofBirth) {
      errors.dateofBirth = "Date of Birth is required";
      isValid = false;
    } else {
      // Date of Birth validation: Check if the user is at least 10 years old
      const currentDate = new Date();
      const userDateofBirth = new Date(formData.dateofBirth);
      const yearsDiff =
        currentDate.getFullYear() - userDateofBirth.getFullYear();

      if (yearsDiff < 14) {
        errors.dateofBirth = "You must be at least 14 years old";
        isValid = false;
      }
    }

    setValidationErrors(errors);
    return isValid;
  };
  const validateOTPForm = () => {
    const otpRegex = /^\d{6}$/; // Assumes OTP is a 6-digit number

    if (!otpData.otp.trim()) {
      alert("Please enter the OTP");
      return false;
    } else if (!otpRegex.test(otpData.otp)) {
      toast.error("Invalid OTP format. OTP should be a 6-digit number");
      return false;
    }

    return true;
  };

  const userRegister = process.env.REACT_APP_API_ENDPOINT_POST_USER;
  const verifyOtp = process.env.REACT_APP_API_ENDPOINT_USER;

  const makeAxiosPostRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    setLoading(true); // Set loading state to true

    if (form === "registration") {
      // Step 1: Register user
      if (validateForm()) {
        try {
          const response = await makeAxiosPostRequest(userRegister, formData);
          console.log("Registration Response:", response.data);
          setOtpData({ ...otpData, email: formData.email });
          setform("verification"); // Move to OTP verification step
        } catch (error) {
          if (error.response && error.response.status === 400) {
            toast.error("Account already exists with this email !");
          } else {
            toast.error("Registration failed. Please try again.");
          }
          console.error("Registration failed:", error.message);
        }
      }
    } else if (form === "verification") {
      // Step 2: Verify OTP
      if (validateOTPForm()) {
        try {
          const response = await makeAxiosPostRequest(verifyOtp, otpData);
          console.log("OTP Verification Response:", response.data);
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        } catch (error) {
          toast.error();
          console.error("OTP verification failed:", error.message);
        }
      }
    }

    setLoading(false); // Reset loading state after submission
  };
  return (
    <>
      <Header />
      <img className="regimageright" src={IMAGES.RIGHT_BG} alt="" />
      <main className="regformbody">
        <h1 className="heading1">{TEXTS.REGISTER_FORM}</h1>
        <h3 className="heading2"> {TEXTS.WELCOME}</h3>
        <div className="reg-form">
          <Form onSubmit={handleSubmit}>
            <div className="form-groupreg">
              <label className="registrationlabel" htmlFor="firstName">
                First Name*
              </label>
              <br></br>
              <input
                className="registrationinput"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              {validationErrors.firstName && (
                <p className="input-error">{validationErrors.firstName}</p>
              )}
            </div>

            <div className="form-groupreg">
              <label htmlFor="lastName" className="registrationlabel">
                Last Name*
              </label>
              <br></br>
              <input
                className="registrationinput"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              {validationErrors.lastName && (
                <p className="input-error">{validationErrors.lastName}</p>
              )}
            </div>

            <div className="form-groupreg">
              <label htmlFor="email" className="registrationlabel">
                Email*{" "}
              </label>
              <br></br>
              <input
                className="registrationinput"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              {validationErrors.email && (
                <p className="input-error">{validationErrors.email}</p>
              )}
            </div>

            <div className="form-groupreg">
              <label htmlFor="password" className="registrationlabel">
                Password*
              </label>
              <br></br>
              <input
                className="registrationinput"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=" "
                required
              />
              {validationErrors.password && (
                <p className="input-error">{validationErrors.password}</p>
              )}
            </div>

            <div className="form-groupreg">
              <label htmlFor="mobile_No" className="registrationlabel">
                Mobile_No*
              </label>
              <br></br>
              <input
                className="registrationinput"
                type="text"
                name="mobile_No"
                value={formData.mobile_No}
                onChange={handleChange}
                placeholder=" "
                required
              />
              {validationErrors.mobile_No && (
                <p className="input-error">{validationErrors.mobile_No}</p>
              )}
            </div>

            <div className="form-groupreg">
              <label htmlFor="dateofBirth" className="registrationlabel">
                Date of Birth*
              </label>
              <br></br>
              <input
                className="registrationinput"
                type="date"
                name="dateofBirth"
                value={formData.dateofBirth}
                onChange={handleChange}
                placeholder=" "
                required
              />
              {validationErrors.dateOfBirth && (
                <p className="input-error">{validationErrors.dateOfBirth}</p>
              )}
            </div>
            <br></br>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={true}
              closeOnClick
            />
             {loading && (
              <div className="loading-spinner">
                <ClipLoader color="#903233" loading={loading} css={override} size={50} />
              </div>
            )}
            {form === "registration" && (
              <>
                <button className="regbutton" type="submit">
                  {TEXTS.SUBMIT_REGISTER}
                </button>
              </>
            )}
            {form === "verification" && (
              <>
                <div className="form-groupreg">
                  <label htmlFor="otp" className="registrationlabel">
                    OTP*
                  </label>
                  <br></br>
                  <input
                    className="registrationinput"
                    type="text"
                    name="otp"
                    value={otpData.otp}
                    onChange={handleOtpChange}
                    placeholder=" "
                    required
                  />
                </div>
                <button className="verifybutton" type="submit">
                  Verify OTP
                </button>
              </>
            )}
          </Form>
          <br></br>
          <p className="ortext"> Or</p>
          <Link to="/login">
            <Link to="/login">
              <p className="existingusrreg">{TEXTS.EXISTING_USER}</p>
            </Link>
          </Link>
        </div>
      </main>
      <img className="regimageleft" src={IMAGES.LEFT_BG} alt="" />
      <Footer />
    </>
  );
};

export default RegistrationForm;
