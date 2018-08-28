import React from 'react';
import {render} from 'react-dom';

import DMPieceComponent from "./WorldBuildingComponents/DMPieceComponent.jsx"
import DMPieceComponent_001 from "./WorldBuildingComponents/DMPieceComponent_001.jsx"
import DMPieceComponent_002 from "./WorldBuildingComponents/DMPieceComponent_002.jsx"
import Card0Component from "./WorldBuildingComponents/CharacterSheets/card0component.js"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from 'react-router-dom';


class WorldBuildingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h1>World Building</h1>
        <Card0Component/>
        <DMPieceComponent_002></DMPieceComponent_002>
        <DMPieceComponent_001></DMPieceComponent_001>
        <DMPieceComponent></DMPieceComponent>

        {/*
        <BrowserRouter>
          <div>
          <Link to="/WorldBuilding/WebComicPages">Web Comic Materials</Link>
          <Link to="/WorldBuilding/Cyberpunk">Web Comic Materials</Link>

            <Switch><Route exact path="/WorldBuilding/WebComicPages" component = {DMPieceComponent}></Route>
            <Route exact path="/WorldBuilding/Cyberpunk" component = {DMPieceComponent}></Route>
            </Switch>
          </div>

        </BrowserRouter>
        */}
      </div>
    )
  }
}
export default WorldBuildingComponent;
