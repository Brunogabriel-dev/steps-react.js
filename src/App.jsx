import React, {useState} from 'react';
import { } from "react-icons/fa";
import "./components/Steps";
import "./components/Stepper.css"


function Step() {
  const [step, setStep] = useState(1);


  const nomes = ["Dados Pessoais", "Adicionar Veículo", "Endereço", "Pagamento", "Confirmação"];

  
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const isLastStep = step === nomes.length;

  return (
    <div className="step">
      <div className="step-header">
        {nomes.map((nome, index) => (
          <div key={index} className={`step-header-item${index + 1 === step ? " active" : ""}`}>
            {nome}
            {index !== nomes.length - 1 && <div className="step-header-separator"></div>}
          </div>
        ))}
      </div>
      <div className="step-footer">
        {step !== 1 && (
          <button className="step-button" onClick={handlePrevious}>
            Voltar
          </button>
        )}
        {!isLastStep && (
          <button className="step-button" onClick={handleNext}>
            Seguir
          </button>
        )}
      </div>
    </div>
  );
}

export default Step;