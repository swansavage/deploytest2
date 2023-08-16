import Loader from 'react-loaders';
import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const RefForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_i98m3iz',
        RefForm.current,
        'lfpB2m75171RkGeVd'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me!</h1>
          <p>
            I am an aspiring web developer looking to perfect and hone my craft!
            If you have any further questions or if you'd just like to contact
            me please do so here!
          </p>
        </div>

        <div className="contact-form">
          <form ref={RefForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" placeholder="Name" name="name" required />
              </li>
              <li className="half">
                <input type="email" placeholder="Email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;
