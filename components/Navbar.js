import Image from 'next/image';
import styles  from '../components/Navbar.module.css';
import Link from 'next/link';
import logo from '../assets/supernovalogo1.png';
import NavLink from './NavLink';


const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <Link href='/'><div className={styles.logo}><Image className={styles.logoImg} src={logo} alt='logo' priority  /><p className={styles.logotxt}>SUPERNOVA</p></div></Link>
        <ul className={styles.ul}>
            <li className={styles.li}><NavLink href='/'>HOME</NavLink></li>
            <li className={styles.li}><NavLink href='/services'>SERVICES</NavLink></li>
            <li className={styles.li}><NavLink href={`/gallery`}>GALLERY</NavLink></li>
            <li className={styles.li}><NavLink href='/about'>ABOUT US</NavLink></li>
            <li className={styles.li}><NavLink href='/contact'>CONTACT US</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
