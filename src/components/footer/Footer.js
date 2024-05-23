import React from 'react';
import logo from '../../images/Logo.png'
import linkdin from '../../images/linkedin-in.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/square-instagram.png'

const Footer = () => {
    return (
        <footer id='contact' className="footer p-10 bg-base-200 text-base-content">
        <aside>
         <img src={logo} alt="" />
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
          <div style={{display:"flex"}}>
            <div style={{height:"25px",width:"25px",borderRadius:"50%",border:"2px solid #FED29C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img style={{height:"50%",width:"50%"}} src={linkdin} alt="" />
            </div>
            <div style={{height:"25px",width:"25px",borderRadius:"50%",border:"2px solid #FED29C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img  style={{height:"50%",width:"50%"}}  src={twitter} alt="" />
            </div>
            <div style={{height:"25px",width:"25px",borderRadius:"50%",border:"2px solid #FED29C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img  style={{height:"50%",width:"50%"}}  src={instagram} alt="" />
            </div>
        </div>
        </aside> 
       
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;