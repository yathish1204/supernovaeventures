import React from 'react';
import styles from './Loading.module.css'


const Loading = () => {

    return (
      <div className={styles.loadContainer}>
        
        <p className={styles.p}>Loading...Please wait</p>
      </div>
    );
}

export default Loading
