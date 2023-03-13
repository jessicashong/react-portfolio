import React, { useState } from "react";
// import { checkPassword, validateEmail } from "";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div class="form-floating mb-3">
            <input type="name" class="form-control" id="floatingInput" placeholder="Name: ">
            <label for="floatingInput">Name: </label><br/>

            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email: </label>

            <input type="message" class="form-control" id="floatingInput" placeholder="Message: ">
            <label for="floatingInput">Message: </label>

            <button class="btn btn-primary" type="submit">Submit</button>
        </div>

    )
}