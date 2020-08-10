import React from 'react';
import styles from './SignUp.module.css';
import netflix from './assets/netflix.png'
import {FaRegCheckCircle} from 'react-icons/fa'
import {BsCheck} from 'react-icons/bs'

const SignUp = () => (
    <>
        <header>
            <div className={styles.header}>
                <img src={netflix} className={styles.logo}></img>
            <p>Sign In</p>
            </div>
        </header>
        <main>
            <div className={styles.main}>
                <FaRegCheckCircle className={styles.icon1}/>
                <div className = {styles.steps}>
                <p>STEP <strong>1</strong> OF <strong>3</strong></p>
                <p>Choose Your Plan.</p>
                </div>
                <div className = {styles.step}><BsCheck className={styles.icon2}/> <p>No commitments, cancel anytime.</p></div>
                <div className = {styles.step}><BsCheck className={styles.icon2}/> <p>Everything on Netflix for one low price.</p></div>
                <div className = {styles.step}><BsCheck className={styles.icon2}/> <p>Unlimited viewing on all your devices.</p></div>
                <button>SEE THE PLANS</button>
            </div>
        </main>
        <footer>
            <div className ={styles.footer}>
            <p>Questions? Contact Us. </p>
            
            <ul>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
            </ul>
            </div>
        </footer>
    </>
);

export default SignUp;