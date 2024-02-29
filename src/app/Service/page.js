import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/component/NavBar';
import Subscribe from '@/component/Subscribe';
import Footer from '@/component/Footer';

const page = () => {
    return (
        <div>
            <section>

            <div className='primary_1st_bg'>
            <div>
            <NavBar/>    
            </div> 
  
            <div className='primary_text'>
                <h1>Our Services</h1>
               <ul>
                <li><Link href={"/"}>Home</Link><Image src={"/images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png"} height={8} width={10}/></li>
                <li style={{color:"#20B15A"}}>Our Services</li>
               </ul>
            </div>
            </div>
            
            
            </section>
            <div className='primary_body'>
              <div className='primary_text_1'>
              <h4>OUR All SERVICES</h4>
              <h2>We Provide BestWeb design <br/>services</h2>
              </div>
              </div>
            <section className='service'>
                  <div className='service_card'>
                    <div>
                    <h1>Build & Launch without problems</h1>
                    <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                      <Image src={"/images/Screenshot 2024-02-29 071923.png"} width={500} height={400}/>
                    </div>i
                    <div>
                    <h1>Build & Launch without problems</h1>
                    <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                      <Image src={"/images/Screenshot 2024-02-29 072912.png"} width={500} height={400}/>
                    </div>
                    
                  </div>
                  <div className='service_card'>
                    <div>
                    <h1>Build & Launch without problems</h1>
                    <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>      
                      <Image src={"/images/Screenshot 2024-02-29 073306.png"} width={500} height={400}/>
                    </div>
                    <div>
                    <h1>Build & Launch without problems</h1>
                    <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                      <Image src={"/images/Screenshot 2024-02-29 073331.png"} width={500} height={400}/>
                    </div>
                    
                  </div>
                  
           </section>
           <Subscribe/>
            <Footer/>
        </div>
    );
};

export default page;