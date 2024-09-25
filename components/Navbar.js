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
            <li className={styles.li}><NavLink href='/'>Home</NavLink></li>
            <li className={styles.li}><NavLink href='/services'>Services</NavLink></li>
            <li className={styles.li}><NavLink href={`/gallery`}>Gallery</NavLink></li>
            <li className={styles.li}><NavLink href='/about'>About us</NavLink></li>
            <li className={styles.li}><NavLink href='/contact'>Contact us</NavLink></li>

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
