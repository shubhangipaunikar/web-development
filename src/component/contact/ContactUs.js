import React from 'react'
import { useRef } from 'react'

import emailjs from '@emailjs/browser';
import swal from 'sweetalert2'
import '../style.css';

const ContactUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jj91hvq', 'template_hbiq4rb', form.current, 'eKRRoS3TfA-V1Du-5')
      .then((result) => {

        swal.fire('mail send successfully');
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <>
      {/* <section>
        <div className='container'>
          <h2 className='--text-center'>Contact us</h2>
          <form className='--form-control' ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='full name' name="user_name" rquired />
            <input type="email" placeholder='email' name="user_email" rquired />
            <input type="text" placeholder='subject' name="subject" rquired />
            <textarea name="message" cols="30" row="10"></textarea>
            <button type="submit" className='--btn --btn-primary'>Send message</button>
          </form>
        </div>
      </section> */}
      <div className='container mx-auto'>
        <div class="row">
        <h4 className='text-center'>Contact Form</h4>
          <div class="col-6 form-center">
            <form className="form-control" ref={form} onSubmit={sendEmail}>

              <div class="form-group">
                <input type="text" class="form-control" name="user_name"  placeholder="Full Name" />
              </div>
              <br/>
              <div class="form-group">
                
                <input type="email" class="form-control" name="user_email"  placeholder="name@example.com" />
              </div>
              <br/>
              <div class="form-group">
                
                <input type="text" class="form-control" name="subject"  placeholder="Subject" />
              </div>
              <br/>

              <div class="form-group">
                
                <textarea class="form-control" name="message" placeholder="message type here.."  rows="3"></textarea>
              </div>
              <br/>
              <button type="submit" class="btn btn-primary mt-10">Send message</button>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}

export default ContactUs