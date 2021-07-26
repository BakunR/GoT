import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/4444.jpg'} alt='error'></img>
            <span>'Somthing goes wrong'</span>
        </>
    )
}

export default ErrorMessage;