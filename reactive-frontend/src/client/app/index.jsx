import React from 'react';
import {render} from 'react-dom';
import MaterialComponent from './materials.jsx';
//import styles from '../../../../angular-frontend/styles.css';

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
                    <li className="sideMenuItem">
                      <button className="transparent btn-flat" onClick = {() => this.setTab(0)}>Home</button>
                    </li>

                    <li className="sideMenuItem">
                      <button className=" transparent btn-flat" onClick = {() => this.setTab(1)} >Projects</button>
                    </li>

                    <li className="sideMenuItem">
                      <button className="transparent btn-flat" onClick = {() => this.setTab(2)}>World Building</button>
                    </li>
                    <li className="sideMenuItem">
                      <button className="transparent btn-flat" onClick = {() => this.setTab(3)}>Useful</button>
                    </li>
                    <li className="sideMenuItem">
                      <button className="transparent btn-flat" onClick = {() => this.setTab(4)}>About</button>
                    </li>
                  </ul>
                </div> //////sidemenu
              </div> ////// col s2 m2 12



              <div className="col s9 m9 l9" id="contentContainer" >
                <div id ="Content0" className= {this.state.tab0Active ? '' : 'dormantTab'}><h1>Home</h1><MaterialComponent>Hello hello </MaterialComponent> </div>
                <div id ="Content1" className= {this.state.tab1Active ? '' : 'dormantTab'}><h1>Projects</h1><MaterialComponent>Hello hello </MaterialComponent></div>
                <div id ="Content2" className= {this.state.tab2Active ? '' : 'dormantTab'}><h1>World Building</h1><MaterialComponent>Hello hello </MaterialComponent></div>
                <div id ="Content3" className= {this.state.tab3Active ? '' : 'dormantTab'}><h1>Useful</h1><MaterialComponent>Hello hello </MaterialComponent></div>
                <div id ="Content4" className= {this.state.tab4Active ? '' : 'dormantTab'}><h1>About</h1><MaterialComponent>Hello hellTab4Tab4Tab4Tab4Tab4Tab4o </MaterialComponent></div>

              </div>

            </div> ////// class row
          </div>

        )
    }

}

render(<App/>, document.getElementById('app'));
