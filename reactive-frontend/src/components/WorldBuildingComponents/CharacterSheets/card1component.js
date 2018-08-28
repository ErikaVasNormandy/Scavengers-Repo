import React from 'react';
import ReactDOM from 'react-dom';
// import './CharSheet.css'

class Card1Component extends React.Component{
	render()
	{
		return(
		<div className = "MagicCard">
			<p>Insert Name Here</p>
			<div className="profilePic">
				<img src="https://vignette.wikia.nocookie.net/elderscrolls/images/c/c3/Cotton.png/revision/latest?cb=20121104221412"></img>
			</div>
			<p className = "cardContent">"Every odyssey begins with a single step"
		"Every odyssey begins with a single step"</p>


		</div>


			);
	}
}

export default Card1Component;
