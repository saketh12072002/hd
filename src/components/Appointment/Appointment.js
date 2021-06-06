import React from 'react'
import './css/appointment.css'
import Button from './../forms/Button/Button'
import emailjs from 'emailjs-com';

function Appointment() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_g6rbvtg', 'template_ke68p7o', e.target, 'user_uh9FZHGEceRQL50NMAOUV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="apdrcontainer">
            <div className="heading">
                    <h1>
                        request an Appointment
                    </h1>
                    <p>
                    Find the perfect present or create your personalized look with the help of our staff. Book an appointment now in a Valentino boutique.
                    </p>
            </div>
            <div className="Enterdetails">
            <form   onSubmit = {sendEmail} className='form' >
                <h1 >
                    Enter your details
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>First Name*</label>
                    <input
                    className='form-input'
                    type='text'
                    name='firsname'
                    placeholder='First Name'
                    required="required"
                />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Last Name*</label>
                    <input
                    className='form-input'
                    type='text'
                    name='secondname'
                    placeholder='Last Name'
                    required="required"
                />
                </div>

                
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Email'
                        
                        
                        />
                    
                    </div>

                    <div className='form-inputs'>
            <label className='form-label'>Phone*</label>
            <input
              className='form-input'
              type='phone'
              name='phone'
              placeholder='Phone'
              required="required"
            />
          
          </div>
          <div className='form-inputs'>
            <label className='form-label'>PREFERRED CONTACT TIME</label>
            <br />
            <select name="option">
    <option value="0">Preferred contact time</option>
    <option value="1">9am - 12noon</option>
    <option value="2">12noon - 6pm</option>
    <option value="3">6pm - 9pm</option>
    <option value="3">9pm-2am</option>
   
  </select>
          
          </div>
          
          <div className='form-inputs'>
            {/* <label className='form-label'>LEAVE A MESSAGE</label> */}
            <textarea name="message" rows="10" cols="30">
             Leave a message for us
          </textarea>
          
          </div>
          <Button className='form-input-btn' type='submit'>
            BOOK AN APPOINTMENT
          </Button>
            </form>
        </div>
        </div>
    )
}

export default Appointment