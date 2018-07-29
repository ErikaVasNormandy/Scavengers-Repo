import React from 'react';
import {render} from 'react-dom';
import ProjectCardComponent from './ProjectCardComponent/ProjectCardComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from 'react-router-dom';

import SickOSComponent from './ProjectComponents/SickOSComponent.jsx';
import ClickJackingComponent from './ProjectComponents/ClickJackingComponent.jsx';
import BootableKaliWindowsComponent from './ProjectComponents/BootableKaliWindows.jsx';


const ProjectComponent = ({match}) =>(
  <BrowserRouter>
    <div>
     <ul>
       <li>
         <Link to="/Projects/BootableKali">BootableKali</Link>
       </li>
       <li>
         <Link to="/Projects/SickOS">SickOS</Link>
       </li>

       <li>
         <Link to="/Projects/ClickJacking">ClickJacking</Link>
       </li>
     </ul>

     <hr />

     <Route exact path="/Projects/BootableKali" component={BootableKaliWindowsComponent} />
     <Route path="/Projects/SickOS" component={SickOSComponent} />
     <Route path="/Projects/ClickJacking" component={ClickJackingComponent } />
   </div>

  </BrowserRouter>


)

const Topics = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <ul>
      <li> <Link to={`${match.url}/BootableKaliLinux`}>Bootable Kali Linux</Link> </li>
      <li> <Link to={`${match.url}/SickOS`}>SickOS</Link></li>
      <li> <Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>


    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />


  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>

  </div>
)


export default ProjectComponent;
