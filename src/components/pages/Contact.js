import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'name'){
            setName(inputValue);
        }else if(inputType === 'email'){
            setEmail(inputValue);
        }else{
            setMessage(inputValue);
        }

        if(!name){
            setErrorMessage('Please enter your name.');
            return;
        }
        if(!validateEmail(email)){
            setErrorMessage('Please enter a valid email.');
            return;
        }
        if(!message){
            setErrorMessage('Please enter a message.');
            return;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        

        alert(`Thank you, ${name}!`);
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div>
            <form className="form">
                <input 
                value={name}
                name="name"
                onChange={handleInputChange}
                type="name" 
                placeholder="Name: " 
                /><br />

                <input 
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email" 
                placeholder="name@example.com"
                /><br />

                <textarea 
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message" 
                placeholder="Message: "
                /><br />

                <button 
                className="btn btn-primary" type="submit" onClick={handleFormSubmit}>Send</button>
            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default ContactForm;