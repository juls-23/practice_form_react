import React from 'react';
import styles from './Title.module.scss';


const Title = (props) => {
  const {text} = props;
  return (
    <h1 className={styles.title}>
      {text}
    </h1>
  );
}

export default Title;
