import React from 'react'
import styles from '../components/Title.module.css';

const Title = ({text1}) => {
  return (
    <div >
      <h1 className={styles.title}>{text1}</h1>
    </div>
  )
}

export default Title
