import React from 'react';
import {render} from 'react-dom';
import DefaultPostComponent from './Posts/DefaultPostComponent.jsx';
import Posts from '../data/MainPosts/Post.json';

class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      Posts: Posts
    }
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
      <div className="mainPageComponent">

        <h5>{this.returnDate()}</h5>
        {/*load up posts, versus projects*/}

        {/* Default Post*/}
        {this.state.Posts.map((post)=>
        {
          return(

            <DefaultPostComponent
              header = {post.date}
              key = {post.date}
              imageinput = {post.imageinput}
              content = {post.content}
              />
            )
          }
        )}
      </div>
    )
  }
}
export default MainPageComponent;
