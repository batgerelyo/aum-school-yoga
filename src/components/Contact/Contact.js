import React from 'react';
import './Contact.css';
import Ne from './tugsugchid.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Бидэнтэй холбогдох</h2>
      </div>
      <div className="contact-card">
        <h3>Мэдээлэл өгөх хаяг</h3>
        <p>Утас: +976 7777 7999</p>
        <p>Утас: +976 9191 5757</p>
        <p>Цахим хаяг:  aum.school.of.yoga@gmail.com</p>
      </div>
      <div className="contact-image">
        <img src={Ne} alt="Yoga Studio" className="fabulous-image" />
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.587898652961!2d106.91211811313687!3d47.91023401701747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969359d41ce0bb%3A0x1d5abb2bc7c74a5d!2sAUM%20School%20of%20Yoga!5e0!3m2!1sen!2smn!4v1696339184673!5m2!1sen!2smn"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
