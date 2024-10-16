"use client" 

import {useState,useEffect} from 'react';
import Image from 'next/image';
import styles  from '../components/Navbar.module.css';
import Link from 'next/link';
import logo from '../assets/supernovalogo1.png';
import NavLink from './NavLink';
import menu from '../assets/menu.svg';


const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if(typeof window!=='undefined'){
      if(window.scrollY>lastScrollY){
        setShowNavbar(false);
      }else{
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
     window.addEventListener('scroll',controlNavbar);;

     return () => {
      window.addEventListener('scroll',controlNavbar);
     }
  }, [lastScrollY]);

  return (
    <nav className={`${styles.nav} ${showNavbar ? styles.show : styles.hide}`}>
      <Link href='/'><div className={styles.logo}><Image className={styles.logoImg} src={logo} alt='logo' priority  /><p className={styles.logotxt}>SUPERNOVA</p></div></Link>
        <ul className={styles.ul}>
            <li className={styles.li}><NavLink href='/'>Home</NavLink></li>
            <li className={styles.li}><NavLink href='/services'>Services</NavLink></li>
            <li className={styles.li}><NavLink href={`/gallery`}>Gallery</NavLink></li>
            <li className={styles.li}><NavLink href='/about'>About us</NavLink></li>
            <li className={styles.li}><NavLink href='/contact'>Contact us</NavLink></li>
            <Image className={styles.menu} src={menu} alt='Hamurger menu' priority />

            {/* <NavLink href='/'><li className={styles.li}>Home</li></NavLink>
            <NavLink href='/services'><li className={styles.li}>Services</li></NavLink>
            <NavLink href={`/gallery`}><li className={styles.li}>Gallery</li></NavLink>
            <NavLink href='/about'><li className={styles.li}>About us</li></NavLink>
            <NavLink href='/contact'><li className={styles.li}>Contact u</li></NavLink> */}
        </ul>
    </nav>
  )
}

export default Navbar
