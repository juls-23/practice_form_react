import React from 'react';
import { Form, Formik } from 'formik';
import styles from './SignInForm.module.scss'
import { SIGN_IN_SCHEMA } from '../../../utilits/validationSchema';
import Input from '../InputWrapper';


const initialValues = {
  email:'',
  password:''
}

const SignInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }
  
    return (
      <Formik initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}>
        {
          (formikProps) => {
            return(
              <Form className={styles.container}>
               <Input name='email' placeholder='Email' className={styles.input}/>
               <Input name='password' type='password' placeholder='Password' className={styles.input} />             
                <input type='submit' value='Login' className={styles.btn}/>         
              </Form>
            )
          }
        }
      </Formik>
    );
}


export default SignInForm;
