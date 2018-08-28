import React from 'react';
import ReactDOM from 'react-dom';


class GearItem extends React.Component{
	render()
	{
		return( 
			<div className = "gearItem">
			<h6>	{this.props.itemTitle}</h6>
				<img src = ""></img>
				<p>{this.props.gearDesc}</p>
			</div>
			);
	}
}

export default GearItem;