import ContactForm from '../components/contact/ContactForm';
import React from 'react';

const Contact = () => {
  return (
    <section
    data-aos="zoom-in-right"
    className="bg-white dark:bg-transparent box-border md:py-28  border-cyan-600 ">
      <div className="py-11 bg-opacity-52 md:mx-48 mx-auto max-w-screen-md justify-center">
        
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
