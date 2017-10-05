import React from 'react';
import {render} from 'react-dom';
import MaterialComponent from './materials.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import ProjectComponent from './components/ProjectComponent.jsx';
import UsefulBitsComponent from './components/UsefulBitsComponent.jsx';
import WorldBuildingComponent from './components/WorldBuildingComponent.jsx';

import data from './data/usefulResourcesData.js';
import styles from '../app/styles.css';

var sectionStyle= {
  backgroundImage: "url(https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/jwHdoTn.png)"
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentTab: 0, tab0Active: true, tab1Active: false, tab2Active: false, tab3Active: false, tab4Active: false}
        this.setTab = this.setTab.bind(this);
    }

    setTab(newTab)
    {
        this.state.currentTab = newTab;
        if(this.state.currentTab == 0)
        {
          console.log("Clicked on 0")
          this.setState({
            tab0Active: true,
            tab1Active: false,
            tab2Active: false,
            tab3Active: false,
            tab4Active: false
          })
        }

        if(this.state.currentTab == 1)
        {
            console.log("Clicked on 1")
          this.setState({
              tab0Active: false,
              tab1Active: true,
              tab2Active: false,
              tab3Active: false,
              tab4Active: false
            })
        }
        if(this.state.currentTab == 2)
        {
          console.log("Clicked on 2")
          this.setState({
              tab0Active: false,
              tab1Active: false,
              tab2Active: true,
              tab3Active: false,
              tab4Active: false
            })
        }
        if(this.state.currentTab == 3)
        {
          console.log("Clicked on 3")
          this.setState({
              tab0Active: false,
              tab1Active: false,
              tab2Active: false,
              tab3Active: true,
              tab4Active: false

            })
        }

        if(this.state.currentTab == 4)
        {
          console.log("Clicked on 4")
          this.setState({
              tab0Active: false,
              tab1Active: false,
              tab2Active: false,
              tab3Active: false,
              tab4Active: true

            })
        }



        this.state.currentContent = newTab;
        console.log(this.state.currentTab)
    }


    render() {
        return(
          <div>
            <div className="row">
              <div className="col s2 m2 l2">
                <div className="sideMenu">
                  <ul>
                    <li>
                      <button className="sideMenuItem transparent " onClick = {() => this.setTab(0)}>Home</button>
                    </li>

                    <li>
                      <button className="sideMenuItem transparent" onClick = {() => this.setTab(1)} >Projects</button>
                    </li>

                    <li>
                      <button className="sideMenuItem transparent " onClick = {() => this.setTab(2)}>World Building</button>
                    </li>
                    <li>
                      <button className="sideMenuItem transparent " onClick = {() => this.setTab(3)}>Useful</button>
                    </li>
                    <li>
                      <button className="sideMenuItem transparent " onClick = {() => this.setTab(4)}>About</button>
                    </li>
                  </ul>
                </div>
              </div>



              <div className="col s9 m9 l9" id="contentContainer" >
                <div id ="Content0" className= {this.state.tab0Active ? '' : 'dormantTab'}><HomeComponent>Hello hello </HomeComponent> </div>
                <div id ="Content1" className= {this.state.tab1Active ? '' : 'dormantTab'}><ProjectComponent>Hello hello </ProjectComponent></div>
                <div id ="Content2" className= {this.state.tab2Active ? '' : 'dormantTab'}><WorldBuildingComponent>Hello hello </WorldBuildingComponent></div>
                <div id ="Content3" className= {this.state.tab3Active ? '' : 'dormantTab'}><UsefulBitsComponent data = {data}>CONTENT HERE</UsefulBitsComponent></div>
                <div id ="Content4" className= {this.state.tab4Active ? '' : 'dormantTab'}><h1>About</h1><MaterialComponent>Hello hellTab4Tab4Tab4Tab4Tab4Tab4o </MaterialComponent></div>

              </div>

            </div>
          </div>

        )
    }

}

render(<App/>, document.getElementById('app'));
