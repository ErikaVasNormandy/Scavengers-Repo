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
        <DefaultPostComponent imageinput = "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/30441830_10211585837750757_7216752123478802432_n.jpg?_nc_cat=0&oh=84b34d34a13954adc80c37faef1f8cfa&oe=5BDC269A" content = {["A new job, and a revamped site. Now that I'm not on the job hunt, I figured it was the time to rebuild the site instead of a slapped together project.",<p>This is my bun Trixie, you can't see her well but she's my Player 2 when she isn't causing trouble</p>] } />
        <DefaultPostComponent/>
      </div>
    )
  }
}
export default MainPageComponent;