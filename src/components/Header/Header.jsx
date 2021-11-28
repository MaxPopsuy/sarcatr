import React from 'react';
import styles from './header.module.css';
import { nanoid } from 'nanoid';

const Header = (props) => {
  return (
    <header className={styles.header}> 
      <h2 className = {styles.header__title}>{props.data.title}</h2>
      <ul className = {styles.header__list}>
        {props.data.list.map(item => <li key={nanoid()} className = {styles.header__list__item}><a href={item.link} className = {styles.header__list__link}>{item.value}</a></li>)}
      </ul>
    </header>
  );
};
export default Header;