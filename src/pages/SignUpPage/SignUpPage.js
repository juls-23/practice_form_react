import React, { Component } from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import Title from '../../components/Title/Title';
import styles from './SignUpPage.module.scss'

class SignUpPage extends Component {
  render() {
    return (
      <section>
        <Title text={'Create an account'}/>
        <p className={styles.text}>We always keep your name and email adress private.</p>
        <SignUpForm />
      </section>
   
      
    );
  }
}

export default SignUpPage;