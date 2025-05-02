import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import GridBackground from './GridBackground';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    setIsSuccess(false);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus(t.contactFormSuccess);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus(t.contactFormError);
      setIsSuccess(false);
    });
  };

  return (
    <div className="contact-container">
      <GridBackground />
      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-card"
        >
          <h1 className="contact-title">{t.contactTitle}</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t.contactFormName}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contactFormName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contactFormEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contactFormEmail}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contactFormMessage}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contactFormMessage}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              {t.contactFormSubmit}
            </button>
            {status && (
              <p className={`status-message ${isSuccess ? 'success' : 'error'}`}>
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 