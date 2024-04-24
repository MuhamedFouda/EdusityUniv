import React from 'react'
import './Contact.scss'
export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f696566a-f70b-4351-95a1-268a5a97fd28");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className='contact'>
            <div className="contact-col1">
                <h3>Send us a message <img src={require('../../assets/msg-icon.png')} /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={require('../../assets/mail-icon.png')} /> muhamedahmedfouda@gamil.com</li>
                    <li>  <img src={require('../../assets/phone-icon.png')} />01552065122</li>
                    <li>  <img src={require('../../assets/location-icon.png')} />77 Massachusetts Ave, Cambridge<br />
                        MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col2">
                <form onSubmit={onSubmit}>
                    <label> Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label> Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your Phone Number' required />
                    <label> Your Email</label>
                    <input type='email' name='email' placeholder='Enter your Email' required />
                    <label>Write your messages here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'> Submit Now <img src={require('../../assets/white-arrow.png')} /></button>
                </form>
                    <span>{result}</span>
            </div>

        </div>
    )
}
