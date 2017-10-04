import React from 'react';
import {render} from 'react-dom';
import styles from '../styles.css';

// import data from '../data/usefulResourcesData.js';


class UsefulBitsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    // console.log(this.props.data);
    const { data } = this.props;

    const UsefulBitsArray= data.map(dataList => {
      // console.log(dataList.link);
      return(
        <div className="card horizontal">
          <div className="card-image"> <iframe className = "displayWebsiteIframe"src = {dataList.link}></iframe></div>
          <div className="card-stacked">
              <div className="card-content"> <p>{dataList.site}</p></div>
              <div className="card-action">  <a href={dataList.link}>{dataList.site}</a></div>
          </div>
        </div>
      );

    });

    return(
      <div>
        <h2>Useful Bits</h2>


         {UsefulBitsArray}

      </div>
    )
  }
}
export default UsefulBitsComponent;

/*
<ul>
 <li>"https://stackoverflow.com/questions/46360567/error-npm-is-known-not-to-run-on-node-js-v4-2-6" </li>
   <li>"https://www.matthealy.com.au/blog/post/deploying-flask-to-amazon-web-services-ec2/"</li>

   <li>"https://stackoverflow.com/questions/46360567/error-npm-is-known-not-to-run-on-node-js-v4-2-6"</li>
   <li>https://pyliaorachel.github.io/blog/tech/system/2017/07/07/flask-app-with-gunicorn-on-nginx-server-upon-aws-ec2-linux.html
         </li>

 </ul>
 */
