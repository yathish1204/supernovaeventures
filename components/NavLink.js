"use client"

import { usePathname } from 'next/navigation';
import styles from '../components/NavLink.module.css';
import Link from 'next/link';

const NavLink = ({href,children,target}) => {

    const path = usePathname();

    const isActive = href === '/' ? path === href : path.startsWith(href);

  return (
      <Link href={href} className={isActive ? `${styles.active}` : ''} target={target} >{children}</Link>
  )
}

export default NavLink
