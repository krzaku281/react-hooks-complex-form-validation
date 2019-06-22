import { useState } from 'react';

const useForm = (initModel, submitCallback) => {
  const [inputs, setInputs] = useState(initModel);

  const handleChange = e => {
    e.persist();
    inputs.forEach(i => {
      if (i.name === e.target.name) {
        i.value = i.type === 'checkbox' ? e.target.checked : e.target.value;
        parseInput(i);
        validateInput(i);
      }
    });
    setInputs([...inputs]);
  };

  const handleSubmit = e => {
    e && e.preventDefault();
    inputs.forEach(i => validateInput(i));
    inputs.some(i => i.alert) ? setInputs([...inputs]) : submitCallback();
  };

  const parseInput = input => input.value = input.parseFun ? input.parseFun(input.value) : input.value;

  const validateInput = input => {
    let alert = null;
    input.validators && input.validators.forEach(v => alert = v.isValidFun && !v.isValidFun(input.value) ? v.alert : alert);
    input.alert = alert;
  }

  return [inputs, handleChange, handleSubmit]
};

export default useForm;