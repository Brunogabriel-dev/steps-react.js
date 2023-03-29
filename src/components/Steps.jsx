import React from "react"
import "./Stepper.css";



const Step = ({ steps, currentStep }) => {
  return (
    <div className="step">
      {steps.map((step, index) => (
        <div key={index} className={`step__content ${index === currentStep ? 'active' : ''}`}>
          <div className="step__number">{index + 1}</div>
          <div className="step__title">{step.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Step;
