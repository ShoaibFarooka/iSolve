import {React,useEffect} from 'react';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactCard from '../../components/ContactCard/ContactCard';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(
           0,0
          
        );
      }, );
    return (
        <div className='bg-[#c6deff] text-black'>
            <ContactBanner></ContactBanner>
            <ContactForm></ContactForm>
            <ContactCard></ContactCard>
        </div>
    );
};

export default Contact;