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


              <p className = "sideMenuText">Aspiring technical illustrator of old and new

                <ul className="sideMenuLinks">
                  <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">Github</a></li>
                  <li className="sideMenuLinksLI"><a className= "sideMenuLinksA" href="https://www.linkedin.com/in/erika-hudiono-97a0285b">LinkedIn</a></li>
                </ul>

                </p>
      </div>
    )
  }


}

export default BusinessCardComponent;
