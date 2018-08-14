import React from 'react';
import {render} from 'react-dom';


class DMPieceComponent extends React.Component{
  constructor(props) {
    super(props);


  }

  render(){
    return(
      <div className="DMPieceWrapper">
        <h5 className="DMHeaderWrapper">Mon Aug 13, 2018</h5>
        <img className="DMImgWrapper" src ="https://78.media.tumblr.com/4a3bd29cafc679a31b51f70382e83f75/tumblr_om8qliEO3r1tfmlw0o1_540.gif"></img>
        <div className = "DMTextWrapper">
          <h6>Head Canons So Far::</h6>
          <p>Arda Hyerion</p>
          <p>Cyberpunk2020</p>
          <p>Cyberspace</p>
          <p>World of Darthon aka DND 5e</p>

        </div>
      </div>
    )

  }
}

export default DMPieceComponent
