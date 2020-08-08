import React from 'react';
import './footerStyle.css'


const Footer = () => {
    return ( 
        <footer className="footer darkback ">
        <div className="top-line"></div>
       
     <div className="text-wrapper">
     <p className="footerList-header"><a href= "/">Questions? Contact us.</a></p>
     <section className="footer-ul list-row center ">
           
           <section className="column">
                  
          <ul>
          
          <li><a href= "/">FAQ</a></li>
          <li><a href="/" >investor relations</a></li>
          <li><a href="/" >Privacy</a></li>
          <li><a href="/" >Speed Test</a></li>
         
      </ul>
      <ul>
          <li><a href="/" >Help Center</a></li>
          <li><a href="/" >Jobs</a></li>
          <li><a href="/" >Cookie Preferences</a></li>
          <li><a href="/" >Legal Notices</a></li>
      </ul>
           </section>
          <section className="column">
          <ul>
               <li><a href="/">Account</a></li>
               <li><a href="/">Ways to Watch</a></li>
               <li><a href="/">Corporate Information</a></li>
               <li><a href="/">Netflix Originals</a></li>
           </ul>
           <ul>
               <li><a href="/">Media Center</a></li>
               <li><a href="/">Terms of Use</a></li>
               <li><a href="/">Contact Us</a></li>
               <li><a href="/"> </a></li> 
           </ul>
          </section>

          </section>
       
          <p>netflix nigeria</p>
     </div>
    </footer>
     );
}
 
export default Footer;