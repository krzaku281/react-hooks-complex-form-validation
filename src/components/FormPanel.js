import React from 'react';
import useForm from '../hooks/useForm';
import TextInput from './inputs/TextInput';
import RadioInput from './inputs/RadioInput';
import TextareaInput from './inputs/TextareaInput';
import CheckboxInput from './inputs/CheckboxInput';
import SelectInput from './inputs/SelectInput';

function FormPanel({ title, btnName, submitCallback, model }) {
  const [inputs, setInputs, setSubmit] = useForm(model, submitCallback);

  const Components = { TextInput, RadioInput, TextareaInput, CheckboxInput, SelectInput };

  const capitalize = expression => expression.charAt(0).toUpperCase() + expression.slice(1);

  const renderInput = input => {
    const Component = Components[capitalize(input.type) + 'Input'];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  }

  return (
    <section>
      <h1 className="uk-heading-divider uk-text-center">{title}</h1>
      <form>
        {inputs.map(input => renderInput(input))}
        <div className="uk-text-center">
          <input type="submit" onClick={setSubmit} value={btnName} className="uk-button uk-button-primary uk-margin-top" />
        </div>
      </form>
    </section>
  )
}

export default FormPanel;