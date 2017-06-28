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
    }
    
    
    render() {
        return(<div>
        
        <ul className = "MainMenu">
              
                <li >
                   <button  onClick = {() => this.setTab(0)}>Comprehensive</button>
                </li>
                <li >
                    <button  onClick = {() => this.setTab(1)} >Groceries</button>
                </li>
                
                <li >
                    <button  onClick = {() => this.setTab(2)}>Utilities</button>
                </li>
                
                
              </ul>
              
              
              
              </div>)
    }
    
}

render(<App/>, document.getElementById('app'));
