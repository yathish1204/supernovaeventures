import React from 'react'
import styles from '../components/Service.module.css'
import Image from 'next/image'
import flower from '../assets/flower.png'
import Title from './Title'
import excellence from '../assets/Excellence.png'

const expert = [
    "3 Years of Experience",
    "5 Star Rating",
    "Quick Turnaround",
    "Dedicated Support",
]

const Service = () => {
  return (
    <main className={styles.serviceSec}>
       <div className='floral'>
                <Image  src={flower} alt='floral decoration' priority />
        </div>
            <Title text1='OUR SERVICES' />
            <div className={styles.service}>
                <div className={styles.why}>
                    <h2 className={styles.h2}>Why Supernova Eventures ?</h2>
                    <p className={styles.p}>Supernova Eventures is your trusted partner in the event industry, dedicated to delivering exceptional experiences through our comprehensive services in manpower, hospitality, and design.</p>
                </div>
                <div className={styles.serviceIn}>
                    <div className={styles.left}>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>1. Expert Manpower Services</h3>
                        
                                <ul className={styles.ul}>
                                    <li className={styles.li}><b className={styles.b}>Trained Staff </b>: Our skilled personnel handle all event tasks with professionalism and efficiency.</li>
                                    <li className={styles.li}><b className={styles.b}>On-Site Coordination </b>: Dedicated coordinators manage logistics for seamless execution.</li>
                                    <li className={styles.li}><b className={styles.b}>Specialized Talent </b>: Access to top entertainers, speakers, and technical experts.</li>
                                </ul>
                            
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>2. Exceptional Hospitality Services</h3>
                        
                                <ul className={styles.ul}>
                                    <li className={styles.li}><b className={styles.b}>Guest Management </b>: Smooth registration, check-in, and accommodation processes.</li>
                                    <li className={styles.li}><b className={styles.b}>Exquisite Catering </b>: Partnering with elite caterers for delightful culinary experiences.</li>
                                    <li className={styles.li}><b className={styles.b}>Concierge Services </b>: Personalized support for travel arrangements and special requests.</li>
                                </ul>
                            
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>3. Innovative Designing Services</h3>
                        
                                <ul className={styles.ul}>
                                    <li className={styles.li}><b className={styles.b}>Event Conceptualization </b>: Unique event concepts tailored to your vision.</li>
                                    <li className={styles.li}><b className={styles.b}>Custom Designs </b>: Bespoke designs for stages, lighting, and decor.</li>
                                    <li className={styles.li}><b className={styles.b}>Technology Integration </b>: Cutting-edge tech for interactive and immersive experiences.</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className={styles.right}>
                        {
                            expert.map((str,i)=>{
                                return <div className={styles.honur} key={i}>
                                    <Image className={styles.excellence} src={excellence} alt={str[i]} />
                                    <p className={styles.para}>{str}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.why}>
                    <h2 className={styles.h2}>Commitment to Excellence!</h2>
                    <p className={styles.p}>Supernova Eventures ensures your event’s success through meticulous attention to detail, a client-focused approach, and a relentless pursuit of excellence.</p>
                </div>
            </div>
    </main>
  )
}

export default Service
