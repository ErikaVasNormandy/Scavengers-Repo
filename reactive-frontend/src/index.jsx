import React from 'react';
import {render} from 'react-dom';
import WindowComponent from './components/WindowComponent.jsx'
import MainPageComponent from './components/MainPageComponent.jsx'
import ProjectComponent from './components/ProjectComponent.jsx';
import UsefulBitsComponent from './components/UsefulBitsComponent.jsx';
import WorldBuildingComponent from './components/WorldBuildingComponent.jsx';
import BusinessCardComponent from './components/BusinessCardComponent.jsx';

import data from './data/usefulResourcesData.js';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

class App extends React.Component{
    render() {
        return(
          <div>
            <BrowserRouter>
              <div>
                <div className="topMenu">
                      <div>
                          <Link to="/"><span className = "topHeader">
                              <div className="circleImage"></div>
                              <p className="topsubtext">Fly Me to the Galaxy </p>
                              <p className="bottomHeader">And All the Worlds Beyond</p>
                          </span>

                          </Link>
                      </div>

                      {/*Line separating moto and link menu*/}
                    <div className="v1"/>

                      <Link to="/Projects"><button className ="waves-effect waves-light btn-flat " style = {{color:'white', fontSize: "1.5vw"}}>Projects</button></Link>

                      <Link to="/WorldBuilding"><button className ="waves-effect waves-light  btn-flat"  style = {{color:'white', fontSize: "1.5vw"}}>World Building</button></Link>

                      <Link to="/UsefulBits"><button className ="waves-effect waves-light  btn-flat"  style = {{color:'white', fontSize: "1.5vw"}} >Useful</button></Link>

                      <button className ="waves-effect waves-light  btn-flat" style = {{color:'white', fontSize: "1.5vw"}}  onClick = {() => this.setTab(4)}>About</button>
                </div>
                <div>
                    <WindowComponent start = {Date.now()}/>
                    <div className="banner">
                      <span className="CenterText">

                        Scavengers Repo
                      </span>
                    </div>
                </div>


            <div className="row" id = "actualbody">
              <BusinessCardComponent/>

              <Switch>
                <div className="col s10 m10 l10" id="contentContainer">
                  <Route exact path="/" component={MainPageComponent}/>
                  <Route path="/Projects" component={ProjectComponent}/>
                  <Route path="/UsefulBits" component={UsefulBitsComponent}/>
                  <Route path="/WorldBuilding" component={WorldBuildingComponent}/>
                </div>
              </Switch>

            </div>


        </div>
      </BrowserRouter>


    </div>


        )
    }

}

render(<App/>, document.getElementById('app'));
