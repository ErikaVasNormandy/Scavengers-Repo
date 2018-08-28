import React from 'react';
import ReactDOM from 'react-dom';
// import './CharSheet.css'

class Card2Component extends React.Component{
 render() {
    return (
    <div className = "BasicCard">

      <h4>BASE STATS</h4>
      <div className="row">
       	<div className = "column">
           	<ul>
           	    <li>___  Strength {this.props.str}</li>
           	    <li>___  Dexterity {this.props.dex}</li>
           	    <li>___  Constitution {this.props.con}</li>
           	    <li>___  Tech {this.props.perc}</li>
            	  <li>___  Intelligence {this.props.int}</li>
           	    <li>___  Charisma {this.props.cha}</li>
            </ul>
        </div>


        <div className = "columnFiller">
          <h6>D&D ALIGNMENT: </h6>
          <h3>Lawful Neutral</h3>
          <h6>HOGWARTS HOUSE </h6>
          <h3>Gryffindor</h3>
        </div>



      </div>
    </div>
    );
  }
}
export default Card2Component;
