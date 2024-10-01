"use client";

import React from 'react';
import styles from '../components/Input.module.css';

const Input = ({ type, placeholder, label, isInput, value, onChange, name }) => {
    return (
        <div className={styles.inputGroup}>
            <p className={styles.label}>{label}</p>
            {isInput ? (
                <input
                    className={styles.input}
                    type={type}
                    placeholder={`Enter ${placeholder}`}
                    autoComplete="off"
                    value={value} // Bind the input value
                    onChange={onChange} // Attach the onChange handler
                    name={name} // Use the name prop to identify the input
                />
            ) : (
                <textarea
                    className={styles.textarea}
                    rows='5'
                    max={1000}
                    placeholder={`Enter ${placeholder}`}
                    autoComplete="off"
                    value={value} // Bind the textarea value
                    onChange={onChange} // Attach the onChange handler
                    name={name} // Use the name prop to identify the textarea
                />
            )}
        </div>
    );
};

export default Input;
