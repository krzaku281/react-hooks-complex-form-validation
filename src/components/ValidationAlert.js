import React from 'react';

const ValidationAlert = ({ content }) => {
    return <div className="uk-text-danger uk-text-small" style={{ "height": "21px" }}>{content}</div>
}

export default ValidationAlert;