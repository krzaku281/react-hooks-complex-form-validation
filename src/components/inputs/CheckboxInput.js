import React from 'react';
import ValidationAlert from '../ValidationAlert';

const CheckboxInput = ({ name, label, type, value, alert, setInputs }) => {
    return (
        <div>
            <input id={name} name={name} type={type} value={value} checked={value || false} onChange={setInputs} className={"uk-checkbox"} />
            <label htmlFor={name} className="uk-form-label uk-margin-small-left">{label}</label>
            <ValidationAlert content={alert} />
        </div>
    )
}

export default CheckboxInput;