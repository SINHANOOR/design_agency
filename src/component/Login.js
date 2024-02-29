import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../app/globals.css'

const Login = () => {
    return (
<div className="container">
      <main className="main">
        <h1 className="title">Welcome to our Login Page</h1>
        <form className="form">
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button type="submit" className="button">Login</button>
        </form>
      </main>
    </div>
    );
};

export default Login;