import React from 'react';
import {render} from 'react-dom';
import InstagramEmbed from 'react-instagram-embed'
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
      <div className="DefaultPostComponent">
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
            <div className="postText">
              {this.props.content}
            </div>


      </div>
    )
  }
}
export default DefaultPostComponent;
