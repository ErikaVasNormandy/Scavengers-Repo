import React from 'react';
import {render} from 'react-dom';
import InstagramEmbed from 'react-instagram-embed'


class DMPieceComponent_001 extends React.Component{
  constructor(props) {
    super(props);


  }

  render(){
    return(
      <div className="DMPieceWrapper">
        <h5 className="DMHeaderWrapper">Atomcraft Fuel Cells </h5>
          <InstagramEmbed
            url='https://www.instagram.com/p/BaMsXDWBxpi/?utm_source=ig_web_copy_link'
            maxWidth={640}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
          <div className = "DMTextWrapper">
            <h6>Integrating Low-Key Instagram</h6>
          <p>So Tumblr's API was kind of a mess, I incorporated Instagram to avoid constantly rewriting and reposting things</p>
          <p>https://www.npmjs.com/package/react-instagram-embed</p>
        </div>
    </div>
    )

  }
}

export default DMPieceComponent_001
