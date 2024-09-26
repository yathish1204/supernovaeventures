import Image from 'next/image'
import React from 'react'
import styles from './Chat.module.css'
import whatsapp from '../../assets/Whatsapp.png'

const Chat = () => {
  return (
    <div className={styles.popUp}>
        <Image className={styles.whatImg} src={whatsapp} alt='whatsapp icon'  />
        <p className={styles.para}>Whatsapp</p>
    </div>
  )
}

export default Chat
