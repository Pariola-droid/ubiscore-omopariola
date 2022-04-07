/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import LeftFixes from '../design/LeftFixes'

import styles from './styles/success.module.scss'

const Success = ({ setUiState }) => {

  const back = () => {

    if (setUiState) {
      setUiState("Signup");
    }
      
  }
  

  return (
    <div id={styles.onboard}>
      <LeftFixes />
      <div className={styles.wrap}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src="/ubisoft.svg" alt="Ubisoft Logo" />
          </div>

          <div className={styles.texts}>
            <h3>Thank You...</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
          </div>

          <div className={styles.submit}>
            <button 
              onClick={back}
              role="button"
              name="back to home"
              id="back-home"
            >
              Back to Home
            </button>
          </div>

          <div className={styles.option}>
            <small>Questions? Email us &nbsp;<a href='#0'> help@ubiscore.com</a></small> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success