import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Socials</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
    <section>
        <div className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    Joint Care PT 
                    </Link>
                </div>
                <small className='website-rights'>Joint Care PT ©2023</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' 
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook' />
                    </Link>
                    <Link className='social-icon-link instagram' 
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram' />
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer