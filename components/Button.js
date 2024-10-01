import React from 'react';
import styles from '../components/Button.module.css';
import Link from 'next/link';

const Button = ({ text, href, onClick, type = 'button' }) => {
  // Check if href is provided; if yes, return a link button; otherwise, return a button element.
  return href ? (
    <Link href={href}>
      <div className={styles.btnContainer}>
        <p className={styles.btnText}>{text}</p>
      </div>
    </Link>
  ) : (
    <button type={type} className={styles.btnContainer} onClick={onClick}>
      <p className={styles.btnText}>{text}</p>
    </button>
  );
};

export default Button;
