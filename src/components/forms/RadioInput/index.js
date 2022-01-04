import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './RadioInput.module.scss'


const RadioInput = (props) => {
  return (
    <div>
      <div className={styles.radioInput}>
        <label>
          <Field type='radio' name='role' value='seller' />
              <span className={styles.radioTitle}>Join as a buyer</span>
              <p className={styles.radioText}>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>  
   
        </label >
         </div>
        <div className={styles.radioInput}>
        <label className={styles.label}>
          <Field type='radio' name='role' value='buyer' />
              <span className={styles.radioTitle}>Join as a creative or Marketplace seller</span>
              <p className={styles.radioText}>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace</p>  
           
        </label>     
        </div>
            <ErrorMessage name='role' component='span' className={styles.error} />
     
    </div>
  );  
}

export default RadioInput;