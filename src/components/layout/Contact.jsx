import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id='contact' className='container-width py-20 sm:py-24 md:py-28'>
      <div className='eyebrow'>
        <span>Contact</span>
        <span className='h-px w-16 bg-primary/70' />
      </div>

      <div className='mt-8 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16'>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
