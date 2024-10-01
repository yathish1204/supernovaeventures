'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Image from 'next/image';
import check from '../assets/check.png';
import styles from '../components/Contact.module.css';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import gps from '../assets/gps.png';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './Loading';
import flower from '../assets/flower.png';

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        eventDate: '',
    });

    // Handle input changes and update the formData state
    const handleChange = (e) => {
        const { name, value } = e.target; // Get the input name and value
        setFormData({ ...formData, [name]: value }); // Update the corresponding field
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log("Form Data:", formData); // Log the form data to verify it

        try {
            const response = await axios.post('http://localhost:2000/api/forms/submit', formData); // Send form data to the API
            setSent(true); // Set the sent state to true
            setFormData({ name: '', email: '', phone: '', message: '', eventDate: '' }); // Reset the form
        } catch (error) {
            alert(error.response?.data?.error || 'Failed to submit form'); // Handle error
        } 
    };
    

    return (
        <main className={styles.contactSec}>
            <div className='floral'>
                <Image src={flower} alt='floral decoration' priority />
            </div>
            <Title text1='CONTACT US' />
            <div className={styles.main}>
                <div className={styles.left}>
                    <h3 className={styles.h3}>You can find us at</h3>
                    <div className={styles.leftGroup}>
                        <div className={styles.l1}>
                            <Image className={styles.icon} src={mail} alt='mail icon' />
                            <div className={styles.innerLeft}>
                                <p className={styles.label}>Email</p>
                                <Link href='mailto:contact@supernovaeventures.com' target='_blank'>
                                    <p className={styles.labelInp}>contact@supernovaeventures.com</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.l1}>
                            <Image className={styles.icon} src={phone} alt='phone icon' />
                            <div className={styles.innerLeft}>
                                <p className={styles.label}>Phone Number</p>
                                <p className={styles.labelInp}>+91 8762628710</p>
                            </div>
                        </div>
                        <div className={styles.l1}>
                            <Image className={styles.icon} src={gps} alt='Location icon' />
                            <div className={styles.innerLeft}>
                                <p className={styles.label}>Location</p>
                                <p className={styles.labelInp}>Yelahanka, Bengaluru</p>
                            </div>
                        </div>
                    </div>
                    <Suspense fallback={<Loading />}>
                        <iframe
                            className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.942381322461!2d77.62471667412247!3d13.102836711989397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19a0ed016381%3A0x54fea8537af03904!2sKogilu%20Main%20Rd%2C%20Kogilu%20Layout%2C%20Srinivaspur%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1727746582700!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Suspense>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.h3}>Let's get in touch</h3>
                    <div className={styles.rightIn}>
                        <form onSubmit={handleSubmit}>
                            <Input label='Full Name' isInput={true} type='text' name='name' placeholder='Full Name' required value={formData.name} onChange={handleChange} />
                            <Input label='Email' isInput={true} type='email' name='email' placeholder='Email' required value={formData.email} onChange={handleChange} />
                            <Input label='Phone Number' isInput={true} type='tel' name='phone' placeholder='Phone Number' required value={formData.phone} onChange={handleChange} />
                            <Input label='Message' isInput={false} type='textarea' name='message' placeholder='Message' required value={formData.message} onChange={handleChange} />
                            <Input label='Event Date (Optional)' isInput={true} type='date' name='eventDate' placeholder='Event Date(Optional)' value={formData.eventDate} onChange={handleChange} />
                            <div className={styles.cta}>
                                <Button type="submit" text="Send Message" />
                            </div>
                        </form>
                        {sent && (
                            <div className={styles.sentMsg}>
                                <Image className={styles.check} src={check} alt='checked icon' priority />
                                <p className={styles.sent}>Message sent successfully</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
