"use client"

import React,{useState,useEffect} from 'react'
import styles from '../components/Input.module.css'

const Input = ({type,placeholder,label,isInput}) => {
    

  return (
    <div className={styles.inputGroup}>
      <p className={styles.label}>{label}</p>
      {isInput ? (<input className={styles.input} type={type} placeholder={`Enter ${placeholder}`} required autoComplete="off" /> )
:( <textarea className={styles.textarea} rows='5' max={1000} placeholder={`Enter ${placeholder}`} required autoComplete="off" ></textarea>)
  }
    </div>
  )
}

export default Input
