import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string().matches(/[A-Za-z]{3,16}/, 'Should be more than 4 characters').required('Requared field');

export const EMAIL_SCHEMA =  Yup.string().email('Invalid email').required('Requared field');

export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,'Invalid password').required('Requared field')


export const SIGN_UP_SCHEMA = Yup.object({
  fName: NAME_SCHEMA,
  sName: NAME_SCHEMA,
  dName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConf: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Requared field'),
  role: Yup.string().required('Requared field')
})

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  
})