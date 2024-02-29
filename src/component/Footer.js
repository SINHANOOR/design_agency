import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='footer_bg'>
            <div className='container_footer_text'>
            <div>
                <h1 className='footer_logo'>   
                    <Link href={"/"}>
                    <span style={{color:'white'}}>Design</span><span style={{ color: '#F55F1D'}}>AGENCY</span>
                    </Link>
                </h1>
                <p>Some footer text about the <br/> Agency. Just a little description to<br/> help people understand you you better</p>
                <ul class="social_icons">
                     <li><Link href={"https://www.facebook.com/"} passHref={true} ><Image src={"/images/facebook.png"} width={40} height={40} /></Link></li>
                     <li><Link href={"https://twitter.com/i/flow/login"} ><Image src={"/images/twitter.png"} width={40} height={40} /></Link></li>
                     <li><Link href={"https://bd.linkedin.com/"} ><Image src={"/images/linkedin.png"} width={40} height={40} /></Link></li>
                     <li><Link href={"https://www.instagram.com/"} ><Image src={"/images/insta .png"} width={40} height={40} /></Link></li>
                        
                </ul> 
                <p className='copyright'>Copyright Design Agency 2022</p>
            </div>
            <div>
                <h4>Quick Links</h4>
                <ul>
                <li className='footer_li'>  <Link href={"/Service"}>Service</Link></li>
                <li className='footer_li'>   <Link href={"/Project"}>Project</Link></li>
                <li className='footer_li'>   <Link href={"/"}>About Us</Link></li>
                <li className='footer_li'>   <Link href={"/"}>Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h4 className='footer_address'>Address</h4>
                <p>Design Agency Head Office<br/>Airport Road<br/>United Arab Emirate</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;