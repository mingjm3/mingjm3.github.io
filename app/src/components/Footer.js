import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode, SiHandshake } from 'react-icons/si';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
        <div className='footer-content'>
            <div className='copyright'>
            &copy; {currentYear} Mingjun. All rights reserved.
            </div>
            <div className='social'>
            <ul className='social-buttons'>
                <li className='social-button'>
                <a href='https://www.linkedin.com/in/mingjun-m-0bb5401a1/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedinIn />
                </a>
                </li>
                <li className='social-button'>
                <a href='https://github.com/mingjm3' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
                </li>
                <li className='social-button'>
                <a href='mailto:imingjun.ma@outlook.com' target='_blank' rel='noopener noreferrer'>
                    <AiOutlineMail />
                </a>
                </li>
                <li className='social-button'>
                <a href='https://leetcode.com/arcgo333/' target='_blank' rel='noopener noreferrer'>
                    <SiLeetcode />
                </a>
                </li>
                <li className='social-button'>
                <a href='https://app.joinhandshake.com/stu/users/39687292' target='_blank' rel='noopener noreferrer'>
                    <SiHandshake />
                </a>
                </li>
            </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
