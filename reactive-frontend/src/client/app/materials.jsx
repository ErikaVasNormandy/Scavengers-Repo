import React from 'react';
import {render} from 'react-dom';
import styles from '../app/styles.css';

class materialComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div >
        <strong>Hello materials div!</strong>Hello Materials Div!
      </div>
    )
  }
}
export default materialComponent;
