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
                <h1>All Project</h1>
               <ul>
                <li><Link href={"/"}>Home</Link><Image src={"/images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png"} height={8} width={10}/></li>
                <li style={{color:"#20B15A"}}>All Project</li>
               </ul>
            </div>
            </div>
            </section>
            <div className='primary_body'>
              <div className='primary_text_1'>
              <h4>All Project</h4>
              <h2>Better Agency/SEO Solution At <br/>Your Fingertips</h2>
              </div>
              </div>
            <section className='project'>
                  <div className='project_card'>
                    <div>
                      <Image src={"/images/P_PHONE1.png"} width={500} height={400}/>
                      <h1>Lorem ipsum dolor sit consectutar</h1>
                    </div>
                    <div>
                      <Image src={"/images/P_PHONE2.png"} width={500} height={400}/>
                      <h1>Lorem ipsum dolor sit consectutar</h1>
                    </div>
                    
                  </div>
                  <div className='project_card'>
                    <div>
                      <Image src={"/images/P_PHONE3.png"} width={500} height={400}/>
                      <h1>Lorem ipsum dolor sit consectutar</h1>
                    </div>
                    <div>
                      <Image src={"/images/P_PHONE4.png"} width={500} height={400}/>
                      <h1>Lorem ipsum dolor sit consectutar</h1>
                    </div>
                    
                  </div>
                  <div className='project_card'>
                    <div>
                      <Image src={"/images/P_PHONE5.png"} width={500} height={400}/>
                      <h1>Lorem ipsum dolor sit consectutar</h1>
                    </div>
                    <div>
                      <Image src={"/images/P_PHONE6.png"} width={500} height={400}/>
                      <h1>Lorem ipsum dolor sit consectutar</h1>
                    </div>
                    
                  </div>
           </section>
           <Subscribe/>
           <Footer/>
        </div>
    );
};

export default page;