import React, { useState } from "react";
import Cart from "./Cart";
import AddressForm from "../Orders/AddressForm";
import PaymentForm from "../Orders/PaymentForm";
import "../../Assets/Css/Stepper.css";

const Stepper = ({step}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      {currentStep === 1 && (
        <Cart step={currentStep} onNextStep={handleNextStep} />
      )}
      {currentStep === 2 && (
        <AddressForm step={currentStep} onNextStep={handleNextStep} />
      )}
      {currentStep === 3 && (
        <PaymentForm step={currentStep} onNextStep={handleNextStep} />
      )}
    </>
  );
};

export default Stepper;
