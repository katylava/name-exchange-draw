import { usestate } from 'react'

const steps = [
  {
    number: '1',
    title: 'Enter Names',
    component: EnterNames,
    buttonText: 'Next',
    buttonFunction: saveNames,
  },
  {
    number: '2',
    title: 'Select Exclusions',
    component: SelectExclusions,
    buttonText: 'Draw',
    buttonFunction: drawNames,
  },
  {
    number: '3',
    title: 'Draw Names',
    component: Results,
    buttonText: 'Save and Copy',
    buttonFunction: saveAndCopy,
  },
]

function saveNames() {
  const [names, setNames] = usestate([])
  const [currentStep, setCurrentStep] = usestate(0)
  const textareaContent = document.getElementById('names').value
  setNames(textareaContent.split('\n'))
  setCurrentStep(1)
}

function drawNames() {
}

function saveAndCopy() {
}

export function EnterNames() {
  return (
    <h2>Enter names</h2>
    <p>(one per line)</p>
    <textarea id="names" placeholder="Enter names here, one per line" rows="20" />
  )
}

export function SelectExclusions() {
  const [names, setNames] = usestate([])
  const options = names.map((name) => <option value={name}>{name}</option>)
  return (
    <h2>Select exclusions</h2>
    <select id="exclusions">
      {options}
    </select>

  )
}

export function Results() {
}

export function Steps() {
  const [currentStep, setCurrentStep] = usestate(0)
  const listItems = steps.map(step => {
    <li key={step.number} className={step.number === steps[currentStep].number ? "current" : ""}>
      {step.number}
      <span>{step.title}</span>
    </li>
  })
  const StepComponent = steps[currentStep].component

  return (
    <ul>
      {listItems}
    </ul>
    <StepComponent />
    <button onclick={steps[currentStep].buttonFunction}>
      {steps[currentStep].buttonText} &rarr;
    </button>
  )
}

