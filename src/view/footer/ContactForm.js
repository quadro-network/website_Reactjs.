import React, { useState } from 'react';
import './ContactForm.css';
import Svg_icon from './icon.js';
import axios from 'axios'; // Import axios

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const data = { name, email, message };

        
        axios.post('https://testing.stake-take.com/api/contact', data, {
            headers: {
                'Content-Type': 'application/json',
                'x-secret-key': process.env.REACT_APP_API_KEY
            }
        })
        .then(response => {
            console.log('Success:', response.data);
            setName(''); // Clear the input fields
            setEmail('');
            setMessage('');
            setIsSending(false);
            setIsSent(true); // Indicate that the message has been sent
        })
        .catch((error) => {
            setIsSending(false);
            console.error('Error:', error);
        });
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setIsSent(false); // Reset the sent status when re-opening the form
    };

    return (
        <div className="contact-button-container">
            <button className="contact-button" onClick={toggleModal}>
                <Svg_icon />
            </button>
            {isOpen && (
                <div className="window">
                    <div className='info'>
                        <h3 className='title_contact'>Have any questions? We happy to help.</h3>
                        {isSending ? (
                            <div className="loader"></div>
                        ) : isSent ? (
                            <div>
                                <h2 className="success-message">Message sent successfully!</h2>
                                <button className="close-button" onClick={toggleModal}>✖️</button>
                            </div>
                        ) : (
                            <form className='formInfo' onSubmit={handleSubmit}>
                                <input className='yourname' type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                <input className='email' type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <textarea className='areamsg' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"></textarea>
                                <button className="close-button" onClick={toggleModal}>✖️</button>
                                <button className='sendButton' type="submit">Send</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
