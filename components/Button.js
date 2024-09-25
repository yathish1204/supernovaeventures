import React from 'react'
import styles from '../components/Button.module.css'
import Link from 'next/link'

const Button = ({text,href}) => {
  return (
    <Link href={href}><div className={styles.btnContainer}>
      <p className={styles.btnText}>{text}</p>
    </div>
    </Link>
  )
}

export default Button
