import React from 'react'
import styles from '../components/Button.module.css'
import Link from 'next/link'

const Button = ({text,href}) => {
  return (
    <div className={styles.btnContainer}>
      <Link href={href}><p className={styles.btnText}>{text}</p></Link>
    </div>
  )
}

export default Button
