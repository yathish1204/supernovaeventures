import React from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Title from '@/components/Title'
import Image from 'next/image'
import check from '../assets/Check.png'
import styles from '../components/Contact.module.css'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import gps from '../assets/gps.png'
import Link from 'next/link'
import { Suspense } from 'react'
import Loading from './Loading'
import flower from '../assets/flower.png'

const Contact = () => {
    const  sent = true;
  return (
        <main className={styles.contactSec}>
            <div className='floral'>
                <Image  src={flower} alt='floral decoration' priority />
            </div>
            <Title text1='CONTACT US' />
            <div className={styles.main}>
            <div className={styles.left}>
                <h3 className={styles.h3}>You can find us at</h3>
                <div className={styles.leftGroup}>
                <div className={styles.l1}>
                    <Image  className={styles.icon} src={mail} alt='mail icon' />
                    <div className={styles.innerLeft}>
                        <p className={styles.label}>Email</p>
                        <Link href='mailto:contact@supernovaeventures.com' target='_blank'><p className={styles.labelInp}>contact@supernovaeventures.com</p></Link>
                    </div>
                </div>
                <div className={styles.l1}>
                    <Image  className={styles.icon} src={phone} alt='phone icon' />
                    <div className={styles.innerLeft}>
                        <p className={styles.label}>Phone Number</p>
                        <p className={styles.labelInp}>+91 8762628710</p>
                    </div>
                </div>
                <div className={styles.l1}>
                    <Image className={styles.icon} src={gps} alt='Location icon'  />
                    <div className={styles.innerLeft}>
                        <p className={styles.label}>Location</p>
                        <p className={styles.labelInp}>Yelahanka, Bengaluru</p>
                    </div>
                </div>
                </div>
                <Suspense fallback={<Loading />}>
                    <iframe className={styles.map}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31087.82226889542!2d77.55621577741064!3d13.100593931528925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18605dd9cf5d%3A0x1b1ce96486083bbb!2sYelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727256751234!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Suspense>
            </div>
            <div className={styles.right}>
                <h3 className={styles.h3}>Let's get in touch</h3>
                <div className={styles.rightIn}>
                    <Input label='Full Name' isInput={true} type={`text`} title={'Please enter your Fullname'} placeholder='Full Name'  />
                    <Input label='Email' isInput={true} type={`email`} title={'Please enter your Email'} placeholder='Email'  />
                    <Input label='Phone Number' isInput={true}  type={`tel`} title={'Please enter your Phone number'} placeholder='Phone Number'  />
                    <Input label='Message' isInput={false} type={`textarea`} title={'Please enter your Message'} placeholder='Message'  />
                    <div className={styles.cta}>
                        <Button href='' text='Send Message' />
                    </div>
                    {sent && <div className={styles.sentMsg}><Image className={styles.check} src={check} alt='checked icon' priority  /><p className={styles.sent}>Message sent successfully</p></div>}
                </div>
            </div>
    </div>
        </main>
  )
}

export default Contact
