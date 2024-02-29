import React from 'react';
import Link from 'next/link';
import NavBar from '@/component/NavBar';
import Image from 'next/image';
import Subscribe from '@/component/Subscribe';
import Footer  from '@/component/Footer';
const page = () => {
    return (
        <div>
            <section>

            <div className='primary_1st_bg'>
            <div>
            <NavBar/>    
            </div> 
  
            <div className='primary_text'>
                <h1>Testimonial List</h1>
               <ul>
                <li><Link href={"/"}>Home</Link><Image src={"/images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png"} height={8} width={10}/></li>
                <li style={{color:"#20B15A"}}>Testimonial List</li>
               </ul>
            </div>
            </div>
            
            </section>
            <section>
              <div className='primary_body'>
              <div className='primary_text_1'>
              <h4>TESTIMONIAL LIST</h4>
              <h2>Better Agency/SEO Solution At <br/>Your Fingertips</h2>
              </div>
              </div>
              <div className='testimonial_card'>
                    <div>
                    <Image src={"/images/hum1.png"} height={100} width={100}/><p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Pellentesque 
                            et placerat metus. Morbi aliquet felis sit 
                            amet erat finibus, ac condimentum ligula ornare.</p><h3>Alice Bradley</h3><h4>Backend Developer</h4>
                    </div>
                    <div>
                    <Image src={"/images/hum2.png"} height={100} width={100}/><p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Pellentesque 
                            et placerat metus. Morbi aliquet felis sit 
                            amet erat finibus, ac condimentum ligula ornare.</p><h3>Alice Bradley</h3><h4>Backend Developer</h4>
                    </div>
                    <div>
                    <Image src={"/images/hum3.png"} height={100} width={100}/><p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Pellentesque 
                            et placerat metus. Morbi aliquet felis sit 
                            amet erat finibus, ac condimentum ligula ornare.</p><h3>Alice Bradley</h3><h4>Backend Developer</h4>
                    </div>
              </div>
              <div className='testimonial_card'>
                    <div>
                    <Image src={"/images/hum4.png"} height={100} width={100}/><p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Pellentesque 
                            et placerat metus. Morbi aliquet felis sit 
                            amet erat finibus, ac condimentum ligula ornare.</p><h3>Alice Bradley</h3><h4>Backend Developer</h4>
                    </div>
                    <div>
                    <Image src={"/images/hum5.png"} height={100} width={100}/><p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Pellentesque 
                            et placerat metus. Morbi aliquet felis sit 
                            amet erat finibus, ac condimentum ligula ornare.</p><h3>Alice Bradley</h3><h4>Backend Developer</h4>
                    </div>
                    <div>
                    <Image src={"/images/hum6.png"} height={100} width={100}/><p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Pellentesque 
                            et placerat metus. Morbi aliquet felis sit 
                            amet erat finibus, ac condimentum ligula ornare.</p><h3>Alice Bradley</h3><h4>Backend Developer</h4>
                    </div>
                </div>
            </section>
            <Subscribe/>
           <Footer/>
        </div>
    );
};

export default page;