import React from 'react';

class WindowComponent extends React.Component{

  	getInitialState(){
  			 // This is called before our render function. The object that is
  			 // returned is assigned to this.state, so we can use it later.
  			 // https://stackoverflow.com/questions/44301628/set-background-image-url-using-inline-css-in-react-js
  			 // https://codepen.io/smonn/pen/KzezEw
  			 return { elapsed: 0 };
  	 }


  	constructor(props){
  		super(props);
  		this.props = props;
  		this.state ={
  			/// Previous class
  			class1:"DottedBox",

  			// Define the array index and randomize it
  			currentImage : Math.floor(Math.random() * 15),

  			currentClass:"parallax",
  			images : [
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/maxresdefault.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/dd2bfcfcc02cba84fef55e4c454f9c35.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/Snapdragon-Color-Meaning.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/2030_over_the_garden_wall.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/87cbb3248a40f91479e8ab7da60cb09e.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/960.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/Over-the-Garden-Wall-S01E02-720p-HDTVSeriesdl.com_00_02_54_00000.png',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/efcb4c0e828c1809e38b9cdc02aea227.png',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/jwHdoTn.png',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/M2T6aUy.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/a5432863572ed79c0972569d213dc149.png',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/thumb-1920-625703.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/thumb-1920-735771.png',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/tumblr_mvt4dfUVx71smn4pqo9_1280.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/Dx5LJoH.jpg',
  			'https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg'
  		]
  		};

  		// Bind our functions
  		this.dottedBoxfunction = this.dottedBoxfunction.bind(this)
  		this.tick = this.tick.bind(this)
  	}



  	dottedBoxfunction(e){
  		console.log(this.state.class1)
  		console.log(this.state.images[this.state.currentImage])

  		// Set the imageIndex to be another random number
  		this.setState(
  			{
  				currentImage: Math.floor(Math.random() * 15),
  			}
  		)
  	}

  	// Timer
  	componentDidMount(){
  		 this.timer = setInterval(this.tick, 50);

  	}

  	// Timer
  	componentWillUnmount(){
  		clearInterval(this.timer);
  	}

  	// Timer
  	tick()
  	{
  		this.setState({elapsed: new Date() - this.props.start});
  			 // console.log(this.state.elapsed)
  		var elapsed = Math.round(this.state.elapsed / 100);
  					// This will give a number with one digit after the decimal dot (xx.x):
  		var seconds = (elapsed / 10).toFixed(1);

  		if(seconds%100===0)
  		{
  			console.log(seconds)
  			if( this.state.currentClass==="parallax")

  			{
  					console.log(this.state.images[this.state.currentImage] )
  				 this.setState(
  					 {
  							 currentImage: Math.floor(Math.random() * 15),
  							 currentClass: "parallax2"
  					}
  					)
  			}
  			else
  			{
  				this.setState(
  					{
                currentImage: Math.floor(Math.random() * 15),
  							currentClass: "parallax"
  					}
  				)
  			}
  		}
  		}



  	componentDidUpdate(newProps){
  		this.props = newProps;
  		// console.log("componentdidUpdate. For some reason this function doesn't seem to affect the current code all that much")
  	}


  	render()
  	{

      var num = this.state.currentImage;
      
  		var style_1 =	{
  			backgroundImage: 'url('+   this.state.images[this.state.currentImage]   +')',
  			fontColor: 'black'
  		}


  		var elapsed = Math.round(this.state.elapsed / 100);
  			 // This will give a number with one digit after the decimal dot (xx.x):
  		var seconds = (elapsed / 10).toFixed(1);


  		// console.log(this.state.class1)
  			return(
  				<div className={this.state.currentClass} style={style_1}>
  					<button onClick={this.dottedBoxfunction.bind(this)}>
  						button
  					</button>


  				<p>This example was started <b>{seconds} seconds</b> ago.</p>

  					{/*	// <button onClick={this.dottedBoxfunction.bind(this)}>
  						// 	Button
  						// </button>
  						*/}
  			</div>
  		);
  	}
  }

export default WindowComponent;
