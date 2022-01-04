import React, { Component } from 'react';
import SignInForm from '../components/forms/SignInForm';
import Title from '../components/Title/Title';

class SignInPage extends Component {
  render() {
    return (
      <section>
        <Title text={'Login to your account'}/>
        <SignInForm />
      </section>
    );
  }
}

export default SignInPage;