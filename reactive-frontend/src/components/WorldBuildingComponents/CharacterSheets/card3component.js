import React from 'react';
import ReactDOM from 'react-dom';
// import './CharSheet.css'

class Card3Component extends React.Component{
 render() {
    return (
      <div className="BasicCard">

        <div className="columnMain">
        	<ul>
            <li>Age:</li>
            <li>Gender:</li>
            <li>Hair Color:</li>
            <li>Eye Color:</li>
            <li>Height:</li>
            <li>Role/Class:</li>
            <li>Occupation:</li>
            <li>Default Kit:</li>

         </ul>
         </div>

        <div className="column">
        	<ul>
        	  <li>28</li>
        	  <li>M</li>
        	  <li>Dark Red</li>
        	  <li>Light Brown</li>
        	  <li>5'11</li>
        	  <li>Atomancer</li>
        	  <li>Engineer</li>
              <li>Bow</li>
         </ul>
         </div>

      </div>
    );
  }
}
export default Card3Component;
