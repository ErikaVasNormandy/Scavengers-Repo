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
        <DefaultPostComponent imageinput = "https://avatars0.githubusercontent.com/u/8341739?s=460&v=4" content = "A new job, and a revamped site. Now that I'm not on the job hunt, I figured it was the time to rebuild the site instead of a slapped together project. This is the place where I'll be putting all of my stuff, which can range from technomancer materials, art, geek stuff, or" />
        <DefaultPostComponent/>
      </div>
    )
  }
}
export default MainPageComponent;
