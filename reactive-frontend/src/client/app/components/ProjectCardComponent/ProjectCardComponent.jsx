import React from 'react';
import {render} from 'react-dom';

///require('../../styles.css');

class ProjectCardComponent extends React.Component{


  constructor(props)
  {
    super(props);
    this.state = {
        projectTitle:'',
        projectDescription:'',
        projectLink:'',
        projectImg:'',
        PropOpacity:'0.3',
        opacity: 1
      }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter()
  {
    this.setState({opacity: 0.1})
  }

  mouseLeave() {
    this.setState({opacity: 0.1})
  }




render(){
  const divStyle={
      backgroundImage: 'url(' +this.props.projectImg+ ')',
      backgroundSize: "cover",
    }

  return(
    <div className="projectCardParent" style= {divStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>


      <div className="projectCardChild1">
        <h4>{this.props.projectTitle}</h4>
      </div>


      <div className="projectCardChild2">
        <p onMouseOver={this.mouseEnter}>{this.props.projectDescription}</p>
      </div>

    </div>

  )
}
}

export default ProjectCardComponent;
