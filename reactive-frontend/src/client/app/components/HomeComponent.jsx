import React from 'react';
import {render} from 'react-dom';
import styles from '../styles.css';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Home</h1>
        <p>Website is currently under construction</p>

      </div>
    )
  }
}
export default HomeComponent;
