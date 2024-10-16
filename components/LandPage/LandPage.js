import React from 'react'
import styles from './LandPage.module.css'
import Image from 'next/image'
import landImg from '../../assets/LandImg.png'
import landTitle from '../../assets/LandTitle.png'

const LandPage = () => {
  return (
    <div className={styles.landSec}>
        <div className={styles.landContainer}>
            <Image className={styles.landImg} src={landImg} alt='landing image' />
            <p className={styles.welcomeLine}>Welcome to</p>
            <Image className={styles.landTitle} src={landTitle} alt='landing image' />
            <p className={styles.tagLine}>Dreams To Reality</p>
        </div>
    </div>
  )
}

export default LandPage
