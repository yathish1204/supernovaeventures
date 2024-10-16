import React from 'react'
import styles from './Testimonials.module.css';
import Title from '../Title';
import Image from 'next/image';
import data from './data';
import cardBg from '../../assets/cardBg.png';
import profile from '../../assets/profile.png';
import rating from '../../assets/5star.png'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'




const Testimonials = () => {
  return (
    <section className={styles.testimonialsSec}>
      <Title text1='OUR Happy Clients!' />
      <div className={styles.cardsContainer}>
          {data.map((ele,i)=>{
              return <div className={styles.card} key={i}>
                <Image src={cardBg} alt='card bg' priority className={styles.cardBg} />
                <div className={styles.cardContent}>
                 <div className={styles.cardTopDetails}>
                  <div className={styles.profile}>
                      <Image src={ele.profile} alt='card bg' priority className={styles.profileImg} />
                  </div>
                    <div className={styles.cardTopRight}>
                      <h5 className={styles.name}>{ele.name}</h5>
                      <Image src={ele.rating} alt='rating' priority className={styles.rating} />
                    </div>
                 </div>
                  <div className={styles.quoteContainer}>
                    <p className={styles.quote}>{ele.quote}</p>
                  </div>
                </div>
              </div>
          })}
      </div>

      <div className={styles.cta}>
        <Image src={arrowLeft} alt='arrow left' classname={styles.left} />
        <Image src={arrowRight} alt='arrow right' classname={styles.right} />
      </div>
    </section>
  )
}

export default Testimonials
