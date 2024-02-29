import React from 'react';

const Subscribe = () => {
    return (
       <section className='sub_bg'>
            <div className='sub_text'>
                <h6 className='sub_header'>SUBSCRIBE</h6>
                <h3 className='sub_title'>Subscribe To Get The Latest <br/>News About Us</h3>
                <p className='sub_p'>Please Drop Your Email To Get daily Update About What We Do</p>
            </div>
            <div className='box'>
                <form>
                   <div>
                   <input type="text" placeholder="Enter Your Email Address" className='form_box' />
                   <button type='submit' className='sub_btn'>Subscribe</button>
                   </div>
                </form>
            </div>
       </section>
    );
};

export default Subscribe;