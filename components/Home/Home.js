import React from 'react'
import Button from "@/components/Button"
import styles from './Home.module.css';
import Title from '../Title';
import Image from 'next/image';
import aboutImg from '../../assets/aboutImg.png'
import qn from '../../assets/question.svg'

const Home = () => {
  return (
    <main className={styles.homeSec}>
      {/* Hero Section */}
      <Title text1={'ABOUT US'} />
      <section className={styles.aboutSec}>
            <div className={styles.left}>
                <h3 className={styles.h3}>Who we are? Why choose us?</h3>
                <p className={styles.p}>
                Supernova Eventures was founded with a mission to address the critical need for skilled manpower in the event industry and to manage all aspects of event planning and execution. We recognize the challenges that businesses face in securing reliable and professional staff for their events, and we are here to bridge that gap.
                </p>
                <div className={styles.aboutBtn}>
                <Button text='Find out more' href='/about' /> 
                </div>
            </div>
                <div className={styles.right}>
                  <Image className={styles.aboutImg} src={aboutImg} alt='About image'  priority  />
                </div>
      </section>

      <div className={styles.qTitle}><Title text1={'Any Queries '} /><Image className={styles.qn} src={qn} alt='question icon' priority /></div>
      <section className={styles.queries}>
            <p className={styles.p1}>We are pleased to address any queries you may have regarding event execution. Let’s connect to ensure your event’s success.</p>
            <div className={styles.aboutBtn}>
              <Button text='Connect with us' href='/contact' />
            </div>
            
      </section>
    </main>
  )
}

export default Home;

