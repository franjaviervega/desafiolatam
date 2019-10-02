import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue">

            <div className="footer-copyright text-center py-3">
                © 2019 Copyright:
                <a href="/">
                    Desafio Latam React G8
                </a>
            </div>


            <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1">
                        <i className="fab fa-facebook-f"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1">
                        <i className="fab fa-twitter"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-gplus mx-1">
                        <i className="fab fa-google-plus-g"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1">
                        <i className="fab fa-linkedin-in"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-dribbble mx-1">
                        <i className="fab fa-dribbble"> </i>
                    </a>
                </li>
            </ul>
            
        
        </footer>

    );
};

export default Footer;