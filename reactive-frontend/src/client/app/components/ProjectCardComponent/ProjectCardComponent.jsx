import React from 'react';
import {render} from 'react-dom';

///require('../../styles.css');

class ProjectCardComponent extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
        projectTitle:'',
        projectDescription:'',
        projectLink:'',
        projectImg:''
      }


  }

  handleClick(){
    console.log("hello")
  }

  loadBG(){

  }




render(){
  const divStyle={
      backgroundImage: 'url(' +this.props.projectImg+ ')',
      backgroundSize: "cover",
      opacity: ".2"
    }

  return(


    <div className="projectCardBody" style= {divStyle}>
      <div className="projectCenterText">
        <h4>{this.props.projectTitle}</h4>
        <p>   {this.state.projectImg}</p>
        <a className="specialLink" href="https://www.google.com">link test</a>
      </div>

    </div>

  )
}
}

export default ProjectCardComponent;
