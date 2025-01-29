import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    poruka: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logika za slanje podataka na server ili API
    // Pretpostavimo da ćemo jednostavno ispisati podatke u konzolu
    console.log(formData);

    setIsSubmitted(true);
  };

  return (
    <div className="contact-form">
      <h2>Kontaktirajte nas</h2>
      {isSubmitted ? (
        <p>
          Hvala što ste nas kontaktirali! Odgovorit ćemo vam u najkraćem mogućem
          roku.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="ime">Ime i Prezime:</label>
            <input
              type="text"
              id="ime"
              name="ime"
              value={formData.ime}
              onChange={handleChange}
              placeholder="Unesite vaše ime i prezime"
              required
            />
          </div>

          <div>
            <label htmlFor="email">E-mail adresa:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Unesite vašu e-mail adresu"
              required
            />
          </div>

          <div>
            <label htmlFor="telefon">Telefon (opcionalno):</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              placeholder="Unesite vaš broj telefona"
            />
          </div>

          <div>
            <label htmlFor="poruka">Poruka:</label>
            <textarea
              id="poruka"
              name="poruka"
              value={formData.poruka}
              onChange={handleChange}
              placeholder="Unesite vašu poruku"
              required
            ></textarea>
          </div>

          <button type="submit">Pošaljite</button>
        </form>
      )}

      <div className="contact-info">
        <h3>Kontakt podaci:</h3>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:kontakt@vasasite.com">kontakt@vasasite.com</a>
        </p>
        <p>
          <strong>Telefon:</strong> +385 1 234 5678
        </p>
        <p>
          <strong>Adresa:</strong> Ulica 123, 10000 Zagreb
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
