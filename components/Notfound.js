"use client"

import React,{useState,useEffect} from 'react';
import Image from 'next/image'
import notfound from '../assets/404.png'
import styles from '../components/NotFound.module.css'
import Button from './Button';

const errorMessages = [
    "Oops! This page is missing, just like your perfect day won’t be. Let’s get you back on track!",
    "Looks like this page didn’t make it to the wedding! But don’t worry, we’ll make sure everything else is perfect.",
    "Something old, something new... but not this page. Let’s find you something beautiful!",
    "It looks like this page couldn’t say ‘I do’ to being found. Let’s take you somewhere magical.",
    "This page didn’t RSVP, but we’re still here to make your big day unforgettable.",
    "Oops! This page wandered off like a runaway bride. Let’s guide you back to the celebration.",
    "Looks like this page caught cold feet, but your dream wedding won't! Let's head back.",
    "This page missed the ceremony, but we’re here to make sure your special day is flawless.",
    "This page got lost in the bouquet toss! Let's help you find your way to the right place.",
    "Like a misplaced wedding ring, this page is missing. Let's get you back on track!"
  ];

const Notfound = () => {

    const [randomQuote, setRandomQuote] = useState('');


    useEffect(() => {
        const randomIdx = Math.floor(Math.random()*errorMessages.length);
        setRandomQuote(errorMessages[randomIdx]);
    }, []);

  return (
    <main className={styles.main}>
        <div className={styles.mainNot}>
            <Image className={styles.imgNot} src={notfound} alt='notfound 404 image' priority />
            <p className={styles.quote}>{randomQuote}</p>
            <div className={styles.notfoundCta}>
            <Button text={'Return home'} href='/' />
            </div>
        </div>
    </main>
  )
}

export default Notfound
