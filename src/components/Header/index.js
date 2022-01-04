import React from 'react'
import Button from './Button';
import Logo from './Logo';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <Button />
    </header>
  )
}

export default Header;
