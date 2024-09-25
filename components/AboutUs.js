import React from 'react'
import styles from '../components/About.module.css'
import Image from 'next/image'
import flower from '../assets/flower.png'
import Title from './Title'
import potrait1 from '../assets/potrait1.png'
import potrait2 from '../assets/potrait2.png'
import potrait3 from '../assets/potrait3.png'

export const admins = [
    {name:"Praveen Kumar Nain",role:"Co-Founder, Supernova",image:potrait1},
    {name:"Sachin Rajput",role:"Co-Founder, Supernova",image:potrait2},
    {name:"Syed Inayath",role:"Managing Director, Supernova",image:potrait3},
    // {name:"Yathish Shettigar",role:"Designer & Developer",image:potrait3},//This one I need for watermark at the footer
];


const AboutUs = () => {
  return (
    <main className={styles.aboutSec}>
       <div className='floral'>
                <Image  src={flower} alt='floral decoration' priority />
        </div>
            <Title text1='ABOUT US' />
            <div>
                <div>
                    <p>Our team is highly collaborative and supportive, coming together on every project to ensure every event reaches it’s full potential.</p>
                </div>
                <div>
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide exceptional and reliable manpower, turning your event dreams into reality with excellence and unforgettable experiences.</p>
                </div>
                <div>
                    <h3>Our Vission</h3>
                    <p>Our vision is to redefine event experiences by creating extraordinary and personalized celebrations. We aspire to be the industry’s preferred partner, renowned for our innovation and exceptional service.</p>
                </div>
                <div>
                    <h3>Our Core Values</h3>
                    <ul>
                        <li><b>Synergistic Collaboration</b>: Fostering unity and innovation through teamwork efficiency.</li>
                        <li><b>Innovation and Creativity</b>: Driving new ideas and solutions.</li>
                        <li><b>Exemplary Performance </b>: Delivering exceptional results consistently.</li>
                        <li><b>Collective Celebration </b>: Sharing in achievements as a unified team.</li>
                    </ul>
                </div>
            </div>
            <Title text1='OUR TEAM' />
            <div>
                {
                    admins.map((admin,i)=>{
                        return <div key={i}>
                            <Image src={admin.image} alt={admin.name} priority />
                            <p>{admin.name}</p>
                            <p>{admin.role}</p>
                        </div>
                    })
                }
            </div>
    </main>
  )
}

export default AboutUs
