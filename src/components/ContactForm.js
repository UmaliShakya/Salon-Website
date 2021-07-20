import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-section">
            <div className="contact-container">
                <h1 className="contact-heading">Contact Us</h1>
                        <div className="form">
                            <div className="form-row">
                                <div className="form-label">Name:</div>
                                <input type="text" className="form-input" required/>
                            </div>
                            <div className="form-row">
                                <div className="form-label">Contact No:</div>
                                <input type="text" className="form-input" required/>
                            </div>
                            <div className="form-row">
                                <div className="form-label">Email:</div>
                                <input type="email" className="form-input" required/>
                            </div>
                            <div className="form-row">
                                <div className="form-label">Message:</div>
                                <textarea type="text" className="form-input" required/>
                            </div>
                            <div className="form-row">
                                <button className="form-button">Send</button>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default ContactForm
