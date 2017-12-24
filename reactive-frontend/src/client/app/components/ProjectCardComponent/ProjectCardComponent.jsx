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
      PropOpacity: 0.1
    })
  }




render(){
  const divStyle={
      backgroundImage: 'url(' +this.props.projectImg+ ')',
      backgroundSize: "cover",
    }
  const descriptionStyle={
    // opacity: this.props.PropOpacity,
    // marginTop: '5.0'
  }
  const containerStyle={
    opacity: '0'
  }

  return(


    <div className="projectCardBody" style= {divStyle} onMouseOver={this.handleMouseOver}>
      <div className="projectCenterText">
        <h4>{this.props.projectTitle}</h4>
        <p className ="description" onMouseOver={this.handleMouseOver}>
          <p style= {containerStyle}>-----</p>
        <p style= {containerStyle}>-----</p>
          <p style= {containerStyle}>-----</p>
          <p style= {containerStyle}>-----</p>
          {this.props.projectDescription}

        <p className = "linkStyle"><a href={this.props.projectLink}>Subdirectory --></a></p>

        </p>
      </div>

    </div>

  )
}
}

export default ProjectCardComponent;
