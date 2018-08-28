import React from 'react';
import ReactDOM from 'react-dom';
import Card1Component from './card1component.js'
import Card2Component from './card2component.js'
import Card3Component from './card3component.js'
import Card4Component from './card4component.js'
import Card5Component from './card5component.js'
import Card6Component from './card6component.js'


class Card0Component extends React.Component{
 render() {
    return (
      <div className="MainCard">

        <Card1Component/>
       	<Card2Component/>
       	<Card3Component/>
       	<Card4Component/>
       	<Card5Component/>
       	<Card6Component/>
      </div>
    );
  }
}
export default Card0Component;
