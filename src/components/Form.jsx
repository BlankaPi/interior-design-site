import React, { useState, useEffect } from 'react';
import "../sass/components/form.scss";
import * as RiIcons from "react-icons/ri";

const Form = () => {

    const [formData, setFormData] = useState(
        {
            firstName: "",
            subject: "",
            email: "",
            confirmEmail: "",
            message: "",
            newsletter: true
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <form className='form-contact' onSubmit={handleSubmit}>
            <input
                name="firstName"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                name="subject"
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
            />
            <input
                name="confirmEmail"
                type="email"
                placeholder="Confirm Email"
                onChange={handleChange}
                value={formData.confirmEmail}
            />
            <textarea className='message'
                name="message"
                placeholder="Hello Iam Intrested in... "
                onChange={handleChange}
                value={formData.message}
            />

            <label htmlFor="newsletter" className="newsletter">
                <input
                    name="newsletter"
                    id="newsletter"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.newsletter}
                />
                <h3>Join our mailing list</h3>
            </label>
            <button className='btn'>Get Started<RiIcons.RiArrowRightLine /></button>
        </form>
    )
}

export default Form