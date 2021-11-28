import React from 'react';
import styles from './home.module.scss';
// import { nanoid } from 'nanoid';

const Home = (props) => {
  return (
    <section className={styles.home}> 
      <h2 className = {styles.home__title}>{props.data.title}</h2>
      <div>
        <p className={styles.home__text}>Sarcatr is universal site and programm with all do you need</p>
      </div>
    </section>
  );
};

export default Home;