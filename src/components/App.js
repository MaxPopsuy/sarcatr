import React, { Component } from 'react';
import Header from "./Header/Header.jsx";

class App extends Component {
  static defaultProps = {};
  
  static propTypes = {};

  render() {
    // const { step } = this.props;

    return (
      <div>
        <Header/>
        <span>0</span>
        {/* <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button> */}
      </div>
    );
  }
};

export default App;