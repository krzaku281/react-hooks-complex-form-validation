import React from 'react';
import FormPanel from './FormPanel';
import registerFormModel from '../models/registrationModel';

function RegisterForm() {
  const submitCallback = e => alert(registerFormModel.map(m => m.label + ': ' + m.value + ',\n').join(''));

  return (
    <div className="uk-container uk-container-small">
      <FormPanel title="Registration Form" btnName="Register" submitCallback={submitCallback} model={registerFormModel} />
    </div>
  );
}

export default RegisterForm;
