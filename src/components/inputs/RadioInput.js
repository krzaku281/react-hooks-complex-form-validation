import React from 'react';
import ValidationAlert from '../ValidationAlert';

function RadioInput({ name, label, type, value, alert, options, setInputs }) {
    return (
        <div>
            <div className="uk-form-label uk-text-large">{label}</div>
            {options && options.map(option =>
                <div key={option.value}>
                    <input id={option.name} name={name} type={type} value={option.value} checked={value === option.value} onChange={setInputs} className="uk-radio" />
                    <label htmlFor={option.name} className="uk-margin-small-left">{option.name}</label>
                </div>)}
            <ValidationAlert content={alert} />
        </div>
    )
}

export default RadioInput;