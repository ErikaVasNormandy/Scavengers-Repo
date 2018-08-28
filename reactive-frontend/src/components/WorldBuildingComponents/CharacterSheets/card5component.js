import React from 'react';
import ReactDOM from 'react-dom';
// import style from './CharSheet.css'

class Card5Component extends React.Component{
 render() {
    return (
      <div className = "bottomCardA row">

        <div className ="bottomColumn">

       	<h6>Willpower	</h6>
           	<ul>
           	    <li>__  Astral Combat</li>
           	</ul>

      	<h6>Strength</h6>
           	<ul>
           	    <li>__  Athletics</li>
           	    <li>__  Brawl</li>
           	    <li>__  Strength Feat</li>
           	</ul>
       	<h6>Dexterity</h6>
           	<ul>
           	    <li>__  Dodge/Evade</li>
           	    <li>__  Stealth/Hide</li>

           	    <li>__  Melee Weapons</li>
           	    <li>__  Ranged Weapons</li>
           	</ul>

       	<h6>Constitution</h6>
           	<ul>
           	    <li>__  Recovery</li>
           	    <li>__  Resist Torture</li>
           	    <li>__  Survival</li>
           	</ul>
       	</div>


       	<div className ="bottomColumn">
        <h6>Tech</h6>
           	<ul>
           	    <li>__  Hardware</li>
           	    <li>__  Software</li>
           	    <li>__  Networking</li>
           	    <li>__  Mechanics</li>

           	</ul>
       	<h6>Intelligence</h6>
           	<ul>
           	    <li>__  First Aid</li>
           	    <li>__  Perception</li>
           	    <li>__  Knowledge</li>
           	</ul>

       	<h6>Charisma</h6>
           	<ul>
           	    <li>__  Leadership</li>
           	    <li>__  Intimidation</li>
           	    <li>__  Charm</li>
           	    <li>__  Diplomacy</li>

           	</ul>

    </div>




      </div>

    );
  }
}
export default Card5Component;
