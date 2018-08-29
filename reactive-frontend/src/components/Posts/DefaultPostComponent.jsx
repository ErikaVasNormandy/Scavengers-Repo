import React from 'react';
import {render} from 'react-dom';
import InstagramEmbed from 'react-instagram-embed'

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  EmailIcon,
} from 'react-share';



class DefaultPostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.returnDate = this.returnDate.bind(this);
  }




  returnDate(){
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }



  render(){
    return(
      <div className="DefaultPostComponent" goTo={this.scrollToContent}>
        {/*load up posts, versus projects*/}
        { /*{this.returnDate()}*/}
          <h4 className="postHeader">{this.props.header}</h4>
            <InstagramEmbed
              url={this.props.imageinput}
              maxWidth={640}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
              />
          <img src = {this.props.imageinput}></img>
            <div className="postText" >
              {this.props.content}
            </div>
            <div className="socialMedia">
              <FacebookShareButton role = "button" children = {<FacebookIcon size={32} round={true} />} url = "http://scavengers-repo.com/" />
            </div>

            <div className="socialMedia">
              <LinkedinShareButton role = "button" children = {<LinkedinIcon size={32} round={true} />} url = "http://scavengers-repo.com/" />
            </div>


            <div className="socialMedia">

                <TumblrShareButton role = "button" children = {<TumblrIcon size={32} round={true} />} url = "http://scavengers-repo.com/" />
            </div>

      </div>
    )
  }
}
export default DefaultPostComponent;
