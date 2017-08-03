import React from 'react';
import {render} from 'react-dom';
//import styles from '../../../../angular-frontend/styles.css';


import styles from '../app/styles.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentTab: 0, tab0Active: true, tab1Active: false, tab2Active: false}
        this.setTab = this.setTab.bind(this)

    }

    setTab(newTab){
        this.state.currentTab = newTab;
    }


    render() {
        return(<div>
        <div className="row">
          <div className="col s2 m2 l2">
            <div className="sideMenu">
              <ul>
                <li >
                   <button  onClick = {() => this.setTab(0)} className="btn waves-effect waves-light transparent flat">Home</button>
                </li>

                <li >
                    <button  onClick = {() => this.setTab(1)}className="btn waves-effect waves-light transparent flat">About</button>
                </li>

                <li >
                    <button  onClick = {() => this.setTab(2)}className="btn waves-effect waves-light transparent flat">Resources</button>
                </li>
              </ul>
            </div>
          </div>
          </div>
          </div>)
    }

}

render(<App/>, document.getElementById('app'));
