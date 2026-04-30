import React from 'react'
import './Footer.css'

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h4>About</h4>
                    <p>MyApp — building delightful experiences since 2026.</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>hello@myapp.example</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 My App. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
