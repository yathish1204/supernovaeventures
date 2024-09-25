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
    <main className={styles.aboutSec}>
       <div className='floral'>
                <Image  src={flower} alt='floral decoration' priority />
        </div>
            <Title text1='OUR SERVICES' />
            <div>
                <div>
                    <h2>Why Supernova Eventures ?</h2>
                    <p>Supernova Eventures is your trusted partner in the event industry, dedicated to delivering exceptional experiences through our comprehensive services in manpower, hospitality, and design.</p>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>1. Expert Manpower Services</h3>
                            <div>
                                <ul>
                                    <li><b>Trained Staff</b>: Our skilled personnel handle all event tasks with professionalism and efficiency.</li>
                                    <li><b>On-Site Coordination</b>: Dedicated coordinators manage logistics for seamless execution.</li>
                                    <li><b>Specialized Talent</b>: Access to top entertainers, speakers, and technical experts.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>2. Exceptional Hospitality Services</h3>
                            <div>
                                <ul>
                                    <li><b>Guest Management</b>: Smooth registration, check-in, and accommodation processes.</li>
                                    <li><b>Exquisite Catering</b>: Partnering with elite caterers for delightful culinary experiences.</li>
                                    <li><b>Concierge Services</b>: Personalized support for travel arrangements and special requests.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>3. Innovative Designing Services</h3>
                            <div>
                                <ul>
                                    <li><b>Event Conceptualization</b>: Unique event concepts tailored to your vision.</li>
                                    <li><b>Custom Designs</b>: Bespoke designs for stages, lighting, and decor.</li>
                                    <li><b>Technology Integration</b>: Cutting-edge tech for interactive and immersive experiences.</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            expert.map((str,i)=>{
                                return <div key={i}>
                                    <Image src={excellence} alt={str[i]} />
                                    <p>{str}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <h2>Commitment to Excellence!</h2>
                    <p>Supernova Eventures ensures your event’s success through meticulous attention to detail, a client-focused approach, and a relentless pursuit of excellence.</p>
                </div>
            </div>
    </main>
  )
}

export default Service
