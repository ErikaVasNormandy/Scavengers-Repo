import React from 'react';
import {render} from 'react-dom';

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
          <h6 className="postHeader">{this.props.header}</h6>
          <img src = {this.props.imageinput}></img>
            <span className="postText">

            </span>
              {this.props.content}

      </div>
    )
  }
}
export default DefaultPostComponent;
