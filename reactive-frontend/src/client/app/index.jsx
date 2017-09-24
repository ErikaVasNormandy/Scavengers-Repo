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
        this.state = {currentTab: 0, tab0Active: true, tab1Active: false, tab2Active: false, tab3Active: false}
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
            tab2Active: false
          })

        }

        if(this.state.currentTab == 1)
        {
            console.log("Clicked on 1")
          this.setState({
              tab0Active: false,
              tab1Active: true,
              tab2Active: false
            })
        }
        if(this.state.currentTab == 2)
        {
          console.log("Clicked on 2")
          this.setState({
              tab0Active: false,
              tab1Active: false,
              tab2Active: true
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
                      <button className="transparent btn-flat" onClick = {() => this.setTab(0)}>Comprehensive</button>
                    </li>

                    <li >
                      <button className=" transparent btn-flat" onClick = {() => this.setTab(1)} >Groceries</button>
                    </li>

                    <li >
                      <button className="transparent btn-flat" onClick = {() => this.setTab(2)}>Utilities</button>
                    </li>
                  </ul>


                </div>

              </div>
              <div className="col s9 m9 l9" id="contentContainer" >
                <MaterialComponent id ="homeContent" className= {this.state.tab0Active ? '' : 'dormantTab'} > Home Content </MaterialComponent>
                <MaterialComponent id ="Content1" className= {this.state.tab1Active ? '' : 'dormantTab'} > Tab 1 </MaterialComponent>
                <MaterialComponent id ="Content2" className= {this.state.tab2Active ? '' : 'dormantTab'}>Tab 2</MaterialComponent>

                  // <div id = "0" className = {this.state.tab0Active ? '' : 'dormantTab'}>
                  //                Comprehensive
                  // </div>
                  // <div id = "1" className = {this.state.tab1Active ? '' : 'dormantTab'}>Groceries</div>
                  // <div id = "2" className = {this.state.tab2Active ? '' : 'dormantTab'}>Utilities</div>

              </div>

            </div>
          </div>)
    }

}

render(<App/>, document.getElementById('app'));
