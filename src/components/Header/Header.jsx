import React, { Component } from 'react';
import styles from './header.module.css';
class Header extends Component {
  
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
    <div> 
      <h2 className = {styles.header__title}>SZH</h2>
      Class Component
      <ul className = {styles.header__list}>
        <li className = {styles.header__list__item}><a href="#" className = {styles.header__list__link}></a></li>
      </ul>
    </div>);
  }
};
export default Header;