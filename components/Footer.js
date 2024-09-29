import React from 'react'
import styles from '../components/Footer.module.css'
import Image from 'next/image'
import logo from '../assets/supernovalogo1.png'
import twitter from '../assets/Twitter.svg'
import linkedin from '../assets/LinkedIn1.svg'
import youtube from '../assets/YouTube.svg'
import instgarm from '../assets/Instagram.svg'
import NavLink from './NavLink'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div  className={styles.footerInner}>
        <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logo} alt='footer logo' lazy="true" />
            <div className={styles.logoTexts}>
                <h4 className={styles.h4}>SUPERNOVA EVENTURES</h4>
                <p className={styles.brandTagLine}>Dreams to Reality</p>
            </div>
        </div>
        <div className={styles.footerLinks}>
            <h4 className={styles.h4}>NAVIGATION LINKS</h4>
            <ul className={styles.ul}>
                <li className={styles.li}><NavLink href='/'>Home</NavLink></li>
                <li className={styles.li}><NavLink href='/services'>Services</NavLink></li>
                <li className={styles.li}><NavLink href={`/gallery`}>Gallery</NavLink></li>
                <li className={styles.li}><NavLink href='/about'>About us</NavLink></li>
                <li className={styles.li}><NavLink href='/contact'>Contact us</NavLink></li>
            </ul>
        </div>
        <div className={styles.iconSet} >
            <h4 className={styles.h4}>SOCIAL LINKS</h4>
            <ul className={styles.iconContainer}>
                <li><NavLink  target="_blank" href='https://www.linkedin.com/in/supernovaeventures'><Image className={styles.icons} src={linkedin} alt='social links'  /></NavLink></li>
                <li><NavLink target="_blank" href='https://www.instagram.com/supernovaeventures'><Image className={styles.icons} src={instgarm} alt='social links'  /></NavLink></li>
                <li><NavLink target="_blank" href='https://www.youtube.com/@SupernovaEventures'><Image className={styles.icons} src={youtube} alt='social links'  /></NavLink></li>
                <li><NavLink target="_blank" href='https://x.com/supernovaeventu'><Image className={styles.icons} src={twitter} alt='social links'  /></NavLink></li>
            </ul>
        </div>

      </div>
      {/* <hr className={styles.hr}/> */}
      <p className={styles.copy}>&copy; 2024 - All Rights Reserved | Supernova Eventures</p>
      <p className={styles.copy}>Designed & Developed - <Link target='_blank'   href='https://www.linkedin.com/in/yathishshettigar'><b>Yathish Shettigar</b></Link></p>
    </footer>
  )
}

export default Footer
