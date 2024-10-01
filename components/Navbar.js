'use client';
import Image from 'next/image';
import styles from '../components/Navbar.module.css';
import Link from 'next/link';
import logo from '../assets/supernovalogo1.png';
import NavLink from './NavLink';
import menu from '../assets/menu.svg';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header>
      <nav className={styles.nav}>
        <Link href='/'>
          <div className={styles.logo}>
            <Image className={styles.logoImg} src={logo} alt='logo' priority />
            <p className={styles.logotxt}>SUPERNOVA EVENTURES</p>
          </div>
        </Link>
        <ul className={`${styles.ul} ${isMobileMenuOpen ? styles.show : ''}`} ref={navRef}>
          <li className={styles.li} onClick={navClick}><NavLink href='/' >Home</NavLink></li>
          <li className={styles.li}onClick={navClick}><NavLink href='/services' onClick={navClick}>Services</NavLink></li>
          <li className={styles.li}onClick={navClick}><NavLink href='/gallery' onClick={navClick}>Gallery</NavLink></li>
          <li className={styles.li}onClick={navClick}><NavLink href='/about' onClick={navClick}>About Us</NavLink></li>
          <li className={styles.li}onClick={navClick}><NavLink href='/contact' onClick={navClick}>Contact Us</NavLink></li>
        </ul>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          {isMobileMenuOpen ? (
            <FaTimes className={styles.closeIcon} />
          ) : (
            <Image src={menu} alt='Menu' priority />
          )}
        </div>
      </nav>
      {/* Overlay Close Icon */}
      {isMobileMenuOpen && (
        <div className={styles.closeOverlay} onClick={navClick}>
          <FaTimes className={styles.closeIcon} />
        </div>
      )}
    </header>
  );
}

export default Navbar;
