import { useState } from 'react'

import './App.css'

import StepIndicator from './components/StepIndicator'

function App() {
  const [currentStep, setCurrentStep] = useState('1')

  return (
    <div className="App">
      <StepIndicator currentStep={currentStep} />
    </div>
  );
}

export default App
