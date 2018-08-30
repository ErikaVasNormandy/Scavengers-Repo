import React from 'react';
import {render} from 'react-dom';
import InstagramEmbed from 'react-instagram-embed'
import MetaTags from 'react-meta-tags';

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
      <div className="DefaultPostComponent" id={this.props.postID}>
        <meta itemprop="thumbnailUrl" content="https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/71481_200w.jpg"/>
        <meta name="twitter:image" content="https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/71481_200w.jpg"/>

        <MetaTags>
          <title>Page 1</title>
          <meta name="description" content={this.props.content}/>
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/71481_200w.jpg" />
          <meta property="og:image:secure_url" content="https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/71481_200w.jpg" />

        </MetaTags>


        <a href = {"http://scavengers-repo.com/#" + `${this.props.postID}`}>link</a>
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
              <FacebookShareButton role = "button" children = {<FacebookIcon size={32} round={true} />} url = {"http://scavengers-repo.com/#" + `${this.props.postID}`}/>
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
