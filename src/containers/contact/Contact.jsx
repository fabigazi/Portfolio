import React, { useRef } from "react";
import './contact.css'

import emailjs from '@emailjs/browser';
import Button from "../../components/button/Button";

const Contact2 = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_70sw5da', 'template_id7wzli', form.current, {
                publicKey: 'zLI7pYxkBw-4JeI5P',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset();

    };
    return (
        <section>
            <div className="contact-container">
                <form ref={form} onSubmit={sendEmail}
                    className="form-control contact- ">
                    <input type="text"
                        placeholder="Full Name*"
                        className="input-field"
                        name="user_name" required />

                    <input type="email"
                        placeholder="Email*"
                        className="input-field"
                        name="user_email" required />

                    <input type="text"
                        placeholder="Subject*"
                        className="input-field"
                        name="subject" required />

                    <textarea name="message"
                        className="input-field"
                        id="1" cols="30" rows="10"></textarea>

                    <Button type="submit" label="Send" variant="btn"/>
                </form>
            </div>
        </section>
    );
}

export default Contact2