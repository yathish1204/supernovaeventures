'use client'
import React, { useEffect } from 'react';
import styles from '../components/Service.module.css';
import Image from 'next/image';
import flower from '../assets/flower.png';
import Title from './Title';
import excellence from '../assets/Excellence.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const expert = [
    "3 Years of Experience",
    "5 Star Rating",
    "Quick Turnaround",
    "Dedicated Support",
];

const services = [
    {
        title: "Expert Manpower Services",
        points: [
            "Trained Staff: Our skilled personnel handle all event tasks with professionalism and efficiency.",
            "On-Site Coordination: Dedicated coordinators manage logistics for seamless execution.",
            "Specialized Talent: Access to top entertainers, speakers, and technical experts."
        ],
    },
    {
        title: "Exceptional Hospitality Services",
        points: [
            "Guest Management: Smooth registration, check-in, and accommodation processes.",
            "Exquisite Catering: Partnering with elite caterers for delightful culinary experiences.",
            "Concierge Services: Personalized support for travel arrangements and special requests."
        ],
    },
    {
        title: "Innovative Designing Services",
        points: [
            "Event Conceptualization: Unique event concepts tailored to your vision.",
            "Custom Designs: Bespoke designs for stages, lighting, and decor.",
            "Technology Integration: Cutting-edge tech for interactive and immersive experiences."
        ],
    }
];

const Service = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main className={styles.serviceSec}>
            <div className='floral'>
                <Image src={flower} alt='floral decoration' priority />
            </div>
            <Title text1='OUR SERVICES' />
            <div className={styles.service}>
                <div className={styles.why}>
                    <h2 className={styles.h2}>Why Supernova Eventures?</h2>
                    <p className={styles.p}>
                        Supernova Eventures is your trusted partner in the event industry, dedicated to delivering exceptional experiences through our comprehensive services in manpower, hospitality, and design.
                    </p>
                </div>
                <div className={styles.serviceIn}>
                    <div className={styles.left}>
                        {services.map((service, index) => (
                            <div className={styles.card} key={index} data-aos="fade-up">
                                <h3 className={styles.h3}>{service.title}</h3>
                                <ul className={styles.ul}>
                                    {service.points.map((point, idx) => (
                                        <li className={styles.li} key={idx}>
                                            <b className={styles.b}>{point.split(":")[0]} </b>{point.split(":")[1]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.right}>
                        {expert.map((str, i) => (
                            <div className={styles.honur} key={i} data-aos="fade-up">
                                <Image className={styles.excellence} src={excellence} alt={str} />
                                <p className={styles.para}>{str}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.why}>
                    <h2 className={styles.h2}>Commitment to Excellence!</h2>
                    <p className={styles.p}>
                        Supernova Eventures ensures your event’s success through meticulous attention to detail, a client-focused approach, and a relentless pursuit of excellence.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Service;
