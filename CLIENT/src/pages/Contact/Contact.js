import React , { useState } from 'react' ;
import "../../pages/css/contact.css";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('https://your-backend-server.com/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
        } else {
            alert('Failed to send message. Please try again later.');
        }
        } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="contact-page-container">
        <div className="image-banner">
            <img
            src="https://via.placeholder.com/1200x300" // Replace with your desired image URL
            alt="Contact Banner"
            />
        </div>
        <div className="contact-container">
            <div className="contact-form">
            <h2>Contact Us</h2>
            <p>
                Please fill out the form below to get in touch with us.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="animated-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="animated-input"
                    required
                />
                </div>
                <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="animated-input"
                required
                />
                <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="animated-input"
                required
                ></textarea>
                <button type="submit" className="animated-button">Send Message</button>
            </form>
            </div>
            <div className="map-container">
            <iframe
                title="Black Prince Huts Hotel Location"
                src="https://maps.google.com/maps?q=Black%20Prince%20Huts%20hotel,%20dahab,%20egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        </div>
    );
};

export default Contact;

