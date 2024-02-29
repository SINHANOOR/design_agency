import NavBar from '@/component/NavBar';
import React from 'react';
import style from './globals.css'
import Subscribe from '@/component/Subscribe';
import Footer from '@/component/Footer';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
    return (
        
          <div>
          <section>
            
            <div>
               
               <div className='hero_bg'>
                 <div>
                 <NavBar/>
                 </div>
                 
                 <div className='Hero_container'>
                 <div className='hero_text'>
                   <h1>Increase Your<br/>Customers Loyalty<br/>and Satisfaction</h1>
                   <p>We help businesses like yours earn more customers,<br/> standout from competitors,  make more money</p>
                    <Link href={""}><button>Get Started</button></Link>
                 </div>
                 <div className='hero_pic'>
                   <ul className='hero_ul'>
                     <li ><Image src={"/images/3phone.png"} height={271} width={408} style={{borderRadius:'10px'}}/></li>
                     <li><Image src={"/images/green web.png"}height={271} width={180} style={{borderRadius:'10px'}}/></li>
                   </ul>
                   <ul className='hero_ul'>
                     <li><Image src={"/images/white web.png"} height={164} width={240}style={{borderRadius:'10px'}}/></li>
                     <li><Image src={"/images/color web.png"} height={164} width={345}style={{borderRadius:'10px'}}/></li>
                   </ul>
                 </div>
                 </div>
                 <div className='hero_partner_bg'>
                       <ul className='hero_partner'>
                         <li><Image src={"/images/google.png"} height={80} width={120}/></li>
                         <li><Image src={"/images/terllo.png"} height={25} width={120}/></li>
                         <li><Image src={"/images/monday.png"} height={110} width={200}/></li>
                         <li><Image src={"/images/Notion.png"} height={40} width={120}/></li>
                         <li><Image src={"/images/slack.png"} height={50} width={120}/></li>
                       </ul>
                     </div>
               </div>
               
             </div>
            
             </section>
             <section className='work_list'>
           <div className='primary_body'>
              
              <div className='primary_text_1'>
              <h4>Work List</h4>
              <h2>We provide the perfect Solution <br/>to your business growth</h2>
              </div>
              <div className='work_card1'>
                  <div>
                    <Image src={'/images/trend.png'} width={90} height={90}/>
                    <h3>Grow Your Business</h3>
                    <p>We Help identify the best ways to<br/> improve your business</p>
                    <Link href={""}><button>Learn More <span style={{fontWeight:'bold'}}> →</span></button></Link> 
                  </div>
                  <div>
                    <Image src={'/images/heart.png'} width={90} height={90}/>
                    <h3>Improve brand loyalty</h3>
                    <p>We Help identify the best ways to<br/> improve your business</p>
                    <Link href={""}><button>Learn More <span style={{fontWeight:'bold'}}> →</span></button></Link>
                  </div>
                  <div>
                    <Image src={'/images/beg.png'} width={90} height={90}/>
                    <h3>Improve Business model</h3>
                    <p>We Help identify the best ways to<br/> improve your business</p>
                    <Link href={""}><button>Learn More <span style={{fontWeight:'bold'}}> →</span> </button></Link>
                  </div>
              </div>
             

          </div>   
           </section>
           <section className='statlist'>
                  <div className='statlist_card'>
                    <div>
                      <Image src={"/images/follower.png"} width={100} height={100}/>
                      <h2>240452</h2>
                      <p>Followers</p>
                    </div>
                    <div>
                      <Image src={"/images/like.png"} width={100} height={100}/>
                      <h2>6300</h2>
                      <p>Solved Problem</p>
                    </div>
                    <div>
                      <Image src={"/images/smile.png"} width={100} height={100}/>
                      <h2>25000</h2>
                      <p>Happy Customers</p>
                    </div>
                    <div>
                      <Image src={"/images/qr.png"} width={100} height={100}/>
                      <h2>360452</h2>
                      <p>Project</p>
                    </div>
                    
                  </div>
           </section>
           <section className='featured_pro'>
            <div className='featured_text'>
                <h4>FEATURED PROJECT</h4>
                <h2>We provide the Perfect Solution to<br/> your business growth</h2>
            </div>
            <div className='featured_card'>
              <div>
               <Image src={"/images/F_black.png"} height={530} width={680}/>
                <p>App Design - June 20, 2022</p>
                <h3>App Redesign</h3>
              </div>
                <div className='featured_small_card'>
                <ul>
                <li> <Image src={"/images/F_MOB.png"} height={188} width={287}/>
                <p>App Design - June 20, 2022</p>
                <h3>Redesign channel website landng page</h3></li>
                <li> <Image src={"/images/F_BLACK_UI.png"} height={188} width={287}/>
                <p>App Design - June 20, 2022</p>
                <h3>Redesign channel website landng page</h3></li>
                </ul>
                <ul>
                <li> <Image src={"/images/F_3 MOB.png"} height={188} width={287}/>
                <p>App Design - June 20, 2022</p>
                <h3>Redesign channel website landng page</h3></li>
                <li> <Image src={"/images/F_BLACK_UI_2.png"} height={188} width={287}/>
                <p>App Design - June 20, 2022</p>
                <h3>Redesign channel website landng page</h3></li>
                </ul>
                </div>
            </div>
           </section>
           <Subscribe/>
           <Footer/>
          </div>
        
    );
};

export default page;