import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Button.module.scss'

const Button = () => {
  const path = useLocation().pathname;
  return (
    <Link
    to={path === "/signin" ? "signup" : "signin"}>
    <button className={styles.btn}>{path === "/signin" ? "Sign up" : "Login"}</button>
  </Link>
  );
}

export default Button;


