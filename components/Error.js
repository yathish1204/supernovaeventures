"use client"

import React,{useState,useEffect} from 'react';
import Image from 'next/image'
import error from '../assets/error.png'
import styles from '../components/Error.module.css'
import Button from './Button';

const errorMessages = [
    "Oops! Something went wrong, but your perfect day is still on track. Let’s try that again!",
    "This wasn’t part of the plan! It seems something unexpected happened. Let’s fix this.",
    "It’s not quite the wedding glitch you wanted. Let’s get things back to beautiful.",
    "Oops, looks like we’ve hit a small hiccup. Don’t worry, we’ll have things running smoothly in no time.",
    "Oh no! We encountered a little bump on the way to your dream wedding. Let’s smooth it out!",
    "Something went wrong. We're working on it. In the meantime, let’s keep planning your big day!",
    "We hit a snag – but it’s nothing a good wedding planner can’t handle. Let’s go back!",
    "We’re so sorry, something didn’t go as planned. But just like your wedding day, we’ll make it right!",
    "Yikes! Something didn’t go as planned. Let’s go back and make it picture-perfect.",
    "Oops! It looks like we’ve hit a small roadblock. Don’t worry, your perfect day is still in sight."
  ];
  

const Error = () => {

    const [randomQuote, setRandomQuote] = useState('');


    useEffect(() => {
        const randomIdx = Math.floor(Math.random()*errorMessages.length);
        setRandomQuote(errorMessages[randomIdx]);
    }, []);

  return (
    <main className={styles.main}>
        <div className={styles.mainError}>
            <Image className={styles.imgError} src={error} alt='error image' priority />
            <div className={styles.detailError}>
            <p className={styles.quote}>{randomQuote}</p>
            <div className={styles.btn}>
            <Button text={'Return home'} href='/' />
            </div>
            </div>
        </div>
    </main>
  )
}

export default Error
