import React from 'react';
import {render} from 'react-dom';
import styles from '../styles.css';

class BusinessCardComponent extends React.Component{
/////----------------------------------------------------------
/////--1.Mounting
/////These methods are called when an instance of a component is being created and inserted into the DOM:
  constructor(props){
    super(props)
  }

  /////----------------------------------------------------------
  /////--2. Render
  render(){
    return(
      <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/VoidRune2MenuImg.png"></img>
          <h6>An all-purpose namespace for every bird, beastie, developer, and pen tester</h6>
            <p>--------------</p>
              <p>Just an amateur here trying to git gud so bear with me if some of my technical documentation runs on a different note than usual. I like to draw; my artsy-hipster side is a sucker for hand-drawn illustrating but I'm hoping to get into CG concept art instead and start having more colors.</p>

                <ul className="sideMenuLinks">
                  <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">Github</a></li>
                  <li className="sideMenuLinksLI"><a className= "sideMenuLinksA" href="https://www.linkedin.com/in/erika-hudiono-97a0285b">LinkedIn</a></li>
                </ul>
      </div>
    )
  }


}

export default BusinessCardComponent;
