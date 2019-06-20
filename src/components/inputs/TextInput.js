import * as React from 'react';
import ValidationAlert from '../ValidationAlert';

function TextInput({ name, label, type, value, alert, setInputs }) {
    return (
        <div>
            <label htmlFor={name} className="uk-form-label uk-text-large">{label}</label>
            <input id={name} name={name} type={type} value={value || ""} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />
            <ValidationAlert content={alert} />
        </div>
    )
}

export default TextInput;