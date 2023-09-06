import React from 'react';
import './CantactForm.css';

const CantactForm = () => {
    return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            
            <div>
                <h1 className='heading-secondary'>get in <span>touch</span></h1>

                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Whether you have a question, feedback, or just want to share your experience at The Stick's, get in touch with us.</p>
                
                <h3>Address:</h3>
                <p>205 8th Ave <br/> Madison, MN, 56256</p>
                
                <h3>Phone:</h3>
                <p>(320) 698-7498</p>

                <h3>Email:</h3>
                <p><a href="mailto:thesticks.madison@email.com" style={{ color: 'white' }}>thesticks.madison@email.com</a></p>

                <h3>Hours of Operation:</h3>
                <p>Tuesday-Thursday: 3:00 PM - 12:00 PM<br/>
                Fri & Sat 3:00PM - 1:00AM<br/>
                Sun From 3:00PM - 8:00PM<br/>
                Monday sadly we are Closed</p>

                <p>Looking for directions? <a href="https://goo.gl/maps/tAuysayWefuU7Uue9" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Click here</a></p>
                <p>Have a special event or a large group? Give us a call, and we'll do our best to accommodate you!</p>

                <iframe 
                    className='EmbedMaps' 
                    title="Google Maps location of The Stick's Bar and Grill" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.8294553716414!2d-96.19917932375077!3d45.00808507107023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cb45b1c424e1a7%3A0xe557658e6e557d4d!2sThe%20Sticks%20Bar%20and%20Grill!5e0!3m2!1sen!2sus!4v1693833018462!5m2!1sen!2sus"
                    width="600" 
                    height="450" 
                    allowfullscreen="false" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>

            <div>
                <h1 className='heading-secondary'>Mail <span>us</span></h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default CantactForm;
