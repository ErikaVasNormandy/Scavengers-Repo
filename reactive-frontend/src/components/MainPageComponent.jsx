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
  render(){
    return(
      <div className="mainPageComponent">
        {/*load up posts, versus projects*/}
        <h3>Today</h3>

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
