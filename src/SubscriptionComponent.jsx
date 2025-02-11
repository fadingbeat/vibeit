import React, { useState } from 'react';

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
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response && response.status === 200) {
        setMessage('Hvala! Bit ćete obaviješteni kada stranica bude online.');
        setEmail(''); // Reset form
      } else {
        throw (
          (new Error(result.error || 'Something went wrong'),
          setMessage({
            message: 'Oops, greška. Probajte ponovno.',
          }))
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
