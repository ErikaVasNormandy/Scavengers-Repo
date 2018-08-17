import React from 'react';
import {render} from 'react-dom';
import InstagramEmbed from 'react-instagram-embed'


class DMPieceComponent_002 extends React.Component{
  constructor(props) {
    super(props);


  }

  render(){
    return(
      <div className="DMPieceWrapper">
        <h5 className="DMHeaderWrapper">Medieval Fantasy Settings for Homebrew DnD </h5>
          <InstagramEmbed
            url='https://www.instagram.com/p/BmjFIN5gPO0/?utm_source=ig_web_copy_link'
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
            <h6>Web Comics</h6>
          <p>Finally got around to making a bit of a comic, or some introductory materials for a Dungeons and Dragons game</p>
        </div>
    </div>
    )

  }
}

export default DMPieceComponent_002
