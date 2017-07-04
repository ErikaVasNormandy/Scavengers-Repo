import React from 'react';
import {render} from 'react-dom';

import styles from '../../../../angular-frontend/styles.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentTab: 0, tab0Active: true, tab1Active: false, tab2Active: false}
        this.setTab = this.setTab.bind(this)

    }

    setTab(newTab){
        this.state.currentTab = newTab;
        if(this.state.currentTab==0)
        {
        console.log("tab0")
            this.setState({
              tab0Active: true,
              tab1Active: false,
              tab2Active: false
              })
        }

        if(this.state.currentTab==1)
        {
          console.log("tab1")
            this.setState({

              tab0Active: false,
              tab1Active: true,
              tab2Active: false
              })
        }
        if(this.state.currentTab==2)
        {
          console.log("tab2")
            this.setState({
              tab0Active: false,
              tab1Active: false,
              tab2Active: true
              })
        }
    }


    render() {
        return(
        <div>
          <div className="row">
            <div className="col s2 m2 l2">
              <div className = "sideMenu">
                <ul>
                  <li>
                    <button className="waves-effect waves-light btn transparent"  onClick = {() => this.setTab(0)}>Home</button>
                   </li>
                   <li>
                      <button className="waves-effect waves-light btn transparent"  onClick = {() => this.setTab(1)} >Projects</button>
                    </li>
                    <li >
                      <button className="waves-effect waves-light btn transparent"  onClick = {() => this.setTab(2)}>World </button>
                    </li>
                    <li >
                      <button className="waves-effect waves-light btn transparent"  onClick = {() => this.setTab(3)}>Useful Links</button>
                    </li>
                    <li >
                      <button className="waves-effect waves-light btn transparent"  onClick = {() => this.setTab(4)}>About </button>
                    </li>
                </ul>

              </div>
            </div>
<p>&nbsp</p>

              <div className ="col s9 m9 l9" id = "contentContainer">
                <p>
                <div id="0" className = {this.state.tab0Active ? '': 'dormantTab'}><h1>0</h1></div>
                <div id="1" className = {this.state.tab1Active ? '': 'dormantTab'}><h1>1</h1></div>
                <div id="2" className = {this.state.tab2Active ? '': 'dormantTab'}><h1>2</h1></div>
                </p>
              </div>
            </div>
          </div>)
    }

}

render(<App/>, document.getElementById('app'));
