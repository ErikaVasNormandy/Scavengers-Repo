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
        projectImg:'',
        PropOpacity:'0.3'
      }
    this.handleMouseOver = this.handleMouseOver.bind(this);

  }


  handleMouseOver(){
    this.setState({
      PropOpacity: '0.1'

    })
  }




render(){
  const divStyle={
      backgroundImage: 'url(' +this.props.projectImg+ ')',
      backgroundSize: "cover",
    }

  return(


    <div className="projectCardBody" style= {divStyle} onMouseOver={this.handleMouseOver}>
      <div className="projectCenterText">
        <h4>{this.props.projectTitle}</h4>
        <a className="specialLink" href={this.props.projectLink}>{this.props.projectLink}</a>
      </div>

    </div>

  )
}
}

export default ProjectCardComponent;
