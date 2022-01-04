import React from 'react';
import { Form, Formik } from 'formik';
import cx from 'classnames';
import styles from './SignUpForm.module.scss'
import { SIGN_UP_SCHEMA } from '../../../utilits/validationSchema';
import Input from '../InputWrapper';
import RadioInput from '../RadioInput';


const initialValues = {
  fName: '',
  sName: '',
  dName: '',
  email:'',
  password:'',
  passwordConf: '',
  role: '',
}

const SignUpForm = (props) => {
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm()
  }
  
    return (
      <Formik initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}>
        {
          (formikProps) => {
            return(
              <Form className={styles.container}>
                <div className={styles.inputWrapper}>
                    <Input name='fName' placeholder='First Name' />
                    <Input name='sName' placeholder='Last Name' />
                    <Input name='dName' placeholder='Display Name' />
                    <Input name='email' placeholder='Email' />
                    <Input name='password' type='password' placeholder='Password' />   
                    <Input name='passwordConf' type='password' placeholder='Password Confirmed' />   
                </div>

                <RadioInput name='roleoptions'  control='radio'/>

                <input type='submit' value='Create account'  className={styles.btn} />
         
              </Form>
            )
          }
        }
      </Formik>
    );
}


export default SignUpForm;