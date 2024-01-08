import logo2 from '../image/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faYoutube,
 faFacebook,
 faTwitter,
 faInstagram,
 faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return (
        <div className="footer" id="contact">
            <div className="content">
            <div className="logo">
                <img className="logo-image" src={logo2} alt="ALPHA LOGO" />
            </div>
            <div className="liens-rapide">
                <div className="title-footer lien">
                    Liens rapide
                </div>
                <div className="liens">
                    <ul class="ul">
                    {/*  */}
                        <li className="item-name">
                            Home
                        </li>
                        <li className="item-name">
                            About Us
                        </li>
                        <li className="item-name">
                            Services
                        </li>
                        <li className="item-name">
                            Products
                        </li>
                        <li className="item-name">
                            Team
                        </li>
                        <li className="item-name">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
            <div className="coordonnes">
                <div className="title-footer  coor">
                    Coordonnées
                </div>
                <div className="contact-header">
                    contact
                </div>
                <div className="contact-header contact1">
                    (237)687 091 407
                </div>
                <div className="contact-header contact2">
                    (237)683 520 976
                </div>
                <div className="contact-header mail-header">
                    Mail
                </div>
                <div className="contact-header mail">
                    contact@alphadigitalservice.com
                </div>
                <div className="contact-header adress-header">
                    Adresse
                </div>
                <div className="contact-header adress">
                    Nv Route Bastos Immeuble FENA Rue 1770
                </div>
                
            </div>
            <div className="liens-rapide">
                <div className="title-footer  services">
                    Nos services
                </div>
                <div className="liens">
                    <ul style={{marginLeft:-40}}>
                    {/*  */}
                        <li className="item-name">
                            Conception de Logiciels
                        </li>
                        <li className="item-name">
                            Web development
                        </li>
                        <li className="item-name">
                            Conception d'applications
                        </li>
                        <li className="item-name">
                            Community management
                        </li>
                        <li className="item-name">
                            AudioVisuel
                        </li>
                        <li className="item-name">
                            Cybersécurité
                        </li>
                        <li className="item-name">
                            Marketing digital
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="copyright-n-socials">
                <div className="copyright">
                    Copyright 2023
                </div>
                <div className="socials">
                    <div className="facebook">
                        <span><FontAwesomeIcon className='icon'  icon={faFacebook} size="1x" /></span>
                    </div>
                    <div className="instagram">
                        <span><FontAwesomeIcon className='icon' icon={faInstagram} size="1x" /></span>
                    </div>
                    <div className="linkedin">
                       <span><FontAwesomeIcon className='icon'  icon={faLinkedin} size="1x" /></span> 
                    </div>
                    <div className="twitter">
                       <span><FontAwesomeIcon className='icon' icon={faTwitter} size="1x" /></span> 
                    </div>
                    <div className="youtube">
                        <span><FontAwesomeIcon  className='icon' icon={faYoutube} size="1x" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}