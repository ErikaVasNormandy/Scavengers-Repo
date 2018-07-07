import React from 'react';
import {render} from 'react-dom';
// import MaterialComponent from './materials.jsx';
import ProjectComponent from './components/ProjectComponent.jsx';
import UsefulBitsComponent from './components/UsefulBitsComponent.jsx';
import WorldBuildingComponent from './components/WorldBuildingComponent.jsx';
import BusinessCardComponent from './components/BusinessCardComponent.jsx';

import data from './data/usefulResourcesData.js';

import styles from './styles.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {imgUrl:""}
        this.randomImage = this.randomImage.bind(this);
    }
    getInitialState(){
      this.setState({
        imgUrl: ""
      })
    }
    componentDidMount(){
      setInterval(this.randomImage.bind(this), 5000);

    }


    randomImage(){
      this.state.imgUrl = "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg";

      var fileNames = [
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/Snapdragon-Color-Meaning.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/maxresdefault.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/thumb-1920-625703.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/M2T6aUy.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/a5432863572ed79c0972569d213dc149.png",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/thumb-1920-735771.png",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/tumblr_mvt4dfUVx71smn4pqo9_1280.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/2030_over_the_garden_wall.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/87cbb3248a40f91479e8ab7da60cb09e.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/jwHdoTn.png",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/Over-the-Garden-Wall-S01E02-720p-HDTVSeriesdl.com_00_02_54_00000.png",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/960.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/efcb4c0e828c1809e38b9cdc02aea227.png",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/Dx5LJoH.jpg",
        "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg"
      ];
       var randomIndex =  Math.floor((Math.random() * fileNames.length) + 0);

      /// this.setState({imgUrl: fileNames[randomIndex]})
      this.setState({imgUrl: this.state.imgUrl })
        ///console.log(this.state.imgUrl)
      }



      setSlideShow(){
        return (
        <div>
          <div id = "smallParallax1" style = {{ backgroundImage: this.state.imgUrl }}></div>
          <div id = "smallParallax2" style = {{ backgroundImage: "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg" }}></div>
        </div>
        )
      }


    render() {


      var parallax1Style = {
        backgroundImage: 'url(' + this.props.imgUrl + ')'
      }


        return(
          <Router>
          <div>
                <div className="topMenu">
                      <div>
                          <span className = "topHeader">
                              <div className="circleImage"></div>
                              <p className="topsubtext">Fly Me to the Galaxy </p>
                              <p className="bottomHeader">And All the Worlds Beyond</p>

                          </span>
                      </div>
                    <div className="v1"></div>



                      <Link to="/Projects"><button className ="waves-effect waves-light btn-flat " style = {{color:'white', fontSize: "1.5vw"}}>Projects</button></Link>

                      <Link to="/WorldBuilding"><button className ="waves-effect waves-light  btn-flat"  style = {{color:'white', fontSize: "1.5vw"}}>World Building</button></Link>

                      <Link to="/UsefulBits"><button className ="waves-effect waves-light  btn-flat"  style = {{color:'white', fontSize: "1.5vw"}} >Useful</button></Link>

                      <button className ="waves-effect waves-light  btn-flat" style = {{color:'white', fontSize: "1.5vw"}}  onClick = {() => this.setTab(4)}>About</button>

                </div>


            <div className="row">


                    <Switch>
			<div className="col s11 m11 l11" id="contentContainer">
                             <Route exact path="/" component={ProjectComponent}/>
                             <Route path="/Projects" component={ProjectComponent}/>


                             <Route path="/UsefulBits" component={UsefulBitsComponent}/>
                             <Route path="/WorldBuilding" component={WorldBuildingComponent}/>
			</div>
                    </Switch>

            </div>


                {/*
                              <Router >
                                <div>
                                  <h1>HERE JOEY</h1>
                                  <div>

                                    <Link to='/materials'><button >Materials</button></Link>
                                    <Link to='/resources'><button >Resources</button></Link>
                                    <Link to='/'><button >Projects</button></Link>
                                  </div>
                                  <Switch>
                                    <Route path="/materials" component={MaterialComponent}/>
                                    <Route path="/" component={ProjectComponent}/>
                                    <Route path="/resources" component={UsefulBitsComponent}/>
                                  </Switch>
                                </div>

                              </Router>
 */}

        </div>
      </Router>



        )
    }

}

render(<App/>, document.getElementById('app'));
