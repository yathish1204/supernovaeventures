'use client'
import React, { useEffect } from 'react';
import styles from '../components/About.module.css';
import Image from 'next/image';
import flower from '../assets/flower.png';
import Title from './Title';
import potrait1 from '../assets/potrait1.png';
import potrait2 from '../assets/potrait2.png';
import potrait3 from '../assets/potrait3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const admins = [
    { name: "Praveen Kumar Nain", role: "Co-Founder, Supernova", image: potrait1 },
    { name: "Sachin Rajput", role: "Co-Founder, Supernova", image: potrait2 },
    { name: "Syed Inayath", role: "Managing Director, Supernova", image: potrait3 },
    // { name: "Yathish Shettigar", role: "Designer & Developer", image: potrait3 }, // This one I need for watermark at the footer
];

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main className={styles.aboutSec}>
            <div className='floral'>
                <Image src={flower} alt='floral decoration' priority />
            </div>
            <Title text1='ABOUT US' />
            <div className={styles.aboutContent}>
                <p className={styles.introPara}>
                    Our team is highly collaborative and supportive, coming together on every project to ensure every event reaches its full potential.
                </p>
                <div className={styles.mission}>
                    <h3 className={styles.h3}>Our Mission</h3>
                    <p className={styles.p}>
                        Our mission is to provide exceptional and reliable manpower, turning your event dreams into reality with excellence and unforgettable experiences.
                    </p>
                </div>
                <div className={styles.mission}>
                    <h3 className={styles.h3}>Our Vision</h3>
                    <p className={styles.p}>
                        Our vision is to redefine event experiences by creating extraordinary and personalized celebrations.
                    </p>
                </div>
                <div className={styles.missionUl}>
                    <h3 className={styles.h3}>Our Core Values</h3>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <b className={styles.b}>Synergistic Collaboration</b>: Fostering unity and innovation through teamwork efficiency.
                        </li>
                        <li className={styles.li}>
                            <b className={styles.b}>Innovation and Creativity</b>: Driving new ideas and solutions.
                        </li>
                        <li className={styles.li}>
                            <b className={styles.b}>Exemplary Performance</b>: Delivering exceptional results consistently.
                        </li>
                        <li className={styles.li}>
                            <b className={styles.b}>Collective Celebration</b>: Sharing in achievements as a unified team.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.team}>
                <Title text1='OUR TEAM' />
            </div>
            <div className={styles.adminContainer}>
                {admins.map((admin, i) => (
                    <div key={i} className={`${styles.admin} fade-in`} data-aos="fade-up">
                        <Image className={styles.adminImg} src={admin.image} alt={admin.name} priority />
                        <div className={styles.nameRole}>
                            <p className={styles.name}>{admin.name}</p>
                            <p className={styles.role}>{admin.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default AboutUs;
