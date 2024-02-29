"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../app/globals.css'

const NavBar = () => {
    
    return (
    <header>
        <nav className='navbar' >
            
            
            <Link href={"/"} className='logo'>
                 Design <span style={{ color: '#F55F1D'}}>AGENCY</span>
           </Link>
           <ul className='nav_ul'>
               <li className='nav_li'> <Link href={"/"}>Home</Link> </li>
               <li className='nav_li'>  <Link href={"/Team"}>Team</Link></li>
               <li className='nav_li'>  <Link href={"/Service"}>Service</Link></li>
               <li className='nav_li'>   <Link href={"/Project"}>Project</Link></li>
               <li className='nav_li'>   <Link href={"/Testimonials"}>Testimonials</Link></li>
               <li className='nav_li'>    <Link href={"/login"}><button className='btn_login'>Login</button></Link></li>
               <li className='nav_li'>  <Link href={"/Register"}><button className='btn_reg'>Register</button ></Link></li>
                   
               
           </ul>
        
            
    </nav>
    </header>
    );
};

export default NavBar;
