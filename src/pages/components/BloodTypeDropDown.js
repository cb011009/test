import React,{useState} from 'react'


export default function BloodTypeDropDown() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    }
  return (
    <div>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="option1">A+</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option1">A+</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
  )
}

