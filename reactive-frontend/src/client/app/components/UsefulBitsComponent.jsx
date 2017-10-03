import React from 'react';
import {render} from 'react-dom';
import styles from '../styles.css';

class UsefulBitsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <h2>Useful Bits</h2>
        <ul>
          <li>"https://stackoverflow.com/questions/46360567/error-npm-is-known-not-to-run-on-node-js-v4-2-6" </li>
            <li>"https://www.matthealy.com.au/blog/post/deploying-flask-to-amazon-web-services-ec2/"</li>

            <li>"https://stackoverflow.com/questions/46360567/error-npm-is-known-not-to-run-on-node-js-v4-2-6"</li>
            <li>https://pyliaorachel.github.io/blog/tech/system/2017/07/07/flask-app-with-gunicorn-on-nginx-server-upon-aws-ec2-linux.html
                  </li>

          </ul>
      </div>
    )
  }
}
export default UsefulBitsComponent;
