import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SubscribeBox = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Molimo unesite ispravnu e-mail adresu');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitEmailToEmailJS(email);
      if (response && response.status === 200) {
        setMessage(
          'Hvala na prijavi! Obavijestit ćemo vas kada stranica bude online!'
        );
      } else {
        setMessage(
          'Oops, nešto je pošlo u krivom smjeru. Molimo probajte ponovno.'
        );
      }
    } catch (error) {
      setMessage(
        'Oops, nešto je pošlo u krivom smjeru. Molimo probajte ponovno.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitEmailToEmailJS = async (email) => {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
    const userID = process.env.REACT_APP_EMAILJS_USER_ID; // Replace with your EmailJS user ID

    const templateParams = {
      user_email: email,
      message:
        'Hvala na prijavi! Obavijestit ćemo vas kada stranica bude online!',
    };

    return emailjs.send(serviceID, templateID, templateParams, userID);
  };

  return (
    <div className="subscribe-box">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Unesite svoju e-mail adresu"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Potvrđujemo...' : 'Obavijesti me'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubscribeBox;
