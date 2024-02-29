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
                <h1>Team</h1>
               <ul>
                <li><Link href={"/"}>Home</Link><Image src={"/images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png"} height={8} width={10}/></li>
                <li style={{color:"#20B15A"}}>Team</li>
               </ul>
            </div>
            </div>
            <div className='primary_body'>
              <div className='primary_text_1'>
              <h4>OUR TEAM MEMBER</h4>
              <h2>Check our awesome team <br/> members</h2>
              </div>
              </div>
                <div className='team'>
                <div className='team_card'>
                    <div>
                      <Image src={"/images/B1.png"} width={360} height={350}/>
                      <h1>Devon Lane</h1>
                    </div>
                    <div>
                      <Image src={"/images/B2.png"} width={360} height={350}/>
                      <h1>Danny Bailey</h1>
                    </div>
                    <div>
                      <Image src={"/images/B3.png"} width={360} height={350}/>
                      <h1>Alex Lov</h1>
                    </div>
                    
                  </div>
                </div>
             </section>
                <Subscribe/>
                <Footer/>
        </div>
    );
};

export default page;