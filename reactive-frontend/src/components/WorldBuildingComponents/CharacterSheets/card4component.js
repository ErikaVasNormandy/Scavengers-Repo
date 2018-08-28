import React from 'react';
import ReactDOM from 'react-dom';
import GearItem from './GearItem.js'
// import './CharSheet.css'

class Card4Component extends React.Component{
	render()
	{
		return(
			<div className = "StretchyLongCard">
				<ul>
					<li><h2>GEAR</h2></li>
					<li><GearItem itemTitle = "Gear Slot 1"/></li>
					<li><GearItem itemTitle = "Gear Slot 2"/></li>
					<li><GearItem itemTitle = "Gear Slot 3"/></li>
					<li><GearItem itemTitle = "Gear Slot 4"/></li>
					<li><GearItem itemTitle = "Gear Slot 5"/></li>
					<li><GearItem itemTitle = "Gear Slot 6"/></li>

				</ul>
			</div>

			);
	}
}

export default Card4Component;
