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

 Jquery backgrounds
 https://css-tricks.com/forums/topic/change-body-background-every-10-sec/
 https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js
 https://stackoverflow.com/questions/12701259/how-to-make-a-node-js-application-run-permanently
 https://www.liquidweb.com/kb/how-to-install-node-js-via-nvm-node-version-manager-on-ubuntu-14-04-lts/
 https://stackoverflow.com/questions/12701259/how-to-make-a-node-js-application-run-permanently
 https://stackoverflow.com/questions/26245942/how-do-i-leave-node-js-server-on-ec2-running-forever
 https://www.npmjs.com/package/pm2

 
 */
