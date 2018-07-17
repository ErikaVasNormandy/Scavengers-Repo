import React from 'react';
import {render} from 'react-dom';
import DefaultPostComponent from './Posts/DefaultPostComponent.jsx'

class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="mainPageComponent">
        {/*load up posts, versus projects*/}
        <h3>Today</h3>
        {/* Default Post*/}
        <DefaultPostComponent/>
      </div>
    )
  }
}
export default MainPageComponent;
