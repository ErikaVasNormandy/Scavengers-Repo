import React from 'react';
import {render} from 'react-dom';
import ProjectCardComponent from './ProjectCardComponent/ProjectCardComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SickOSComponent from './ProjectComponents/SickOSComponent.jsx';
import ClickJackingComponent from './ProjectComponents/ClickJackingComponent.jsx';
import BootableKaliWindowsComponent from './ProjectComponents/BootableKaliWindows.jsx';

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(

      <div>
          <Router>
            <div>
                <Switch>
                  <Route exact path="/Projects/BootableKaliWindows" component={BootableKaliWindowsComponent}/ >
                  <Route exact path="/Projects/sickOS" component={SickOSComponent}/>
                  <Route exact path="/Projects/clickjacking" component={ClickJackingComponent}/>
                </Switch>


           <ul className ="horizontalDisplay">
                <li>
                  <Link to="/Projects/BootableKaliWindows"  style = {{ color: 'white'}} >
                        <ProjectCardComponent

                          projectTitle="Booting a Kali Linux from a USB (Windows)"
                          projectDescription="How would you like to drop in and boot up a Kali Linux from any machine (assuming it's a PC)"
                          projectImg="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/PORG1.png"
                          >
                        </ProjectCardComponent>
                    </Link>
                </li>


                <li>
                  <Link to="/Projects/sickOS" style = {{ color: 'white'}} >
                    <ProjectCardComponent
                          projectTitle="SickOS"
                          projectDescription="Hack a vulnerable VM with shells and Ubuntu privilege escalation. All you need is VirtualBox and an Internet Browser. Overall this activity was mildly difficult if you have no prior experience of pen-testing, so it is a good application of the concepts that a class might teach you."
                          projectImg="https://orig00.deviantart.net/079e/f/2014/012/e/9/spell_book_and_wand_png_stock_by_jumpfer_stock-d71vg5f.png"
                          >
                        </ProjectCardComponent>
                    </Link>
                </li>


                  <li>
                    <Link to="/Projects/ClickJacking" style = {{ color: 'white'}}  >
                        <ProjectCardComponent
                          projectTitle="ClickJacking"
                          projectDescription="Wanted to test out my own site to see if it was vulnerable. The tutorial might be specifically for Wordpress sites, but the basic principles are the same, and it's fairly easy to follow without being too simplistic"
                          projectImg="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/Eye+Sketch.png"
                          >
                        </ProjectCardComponent>
                    </Link>
                  </li>
                  <li>
                    <ProjectCardComponent
                           projectTitle="Scavengers' Repo"
                           projectDescription="All the way from AWS and Gunicorn to Flask and NodeJS"
                           projectImg="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Project+Thumbnails/BaseBotThumbnail.png"
                           projectLink="https://github.com/ErikaVasNormandy/Scavengers-Repo"

                           >
                         </ProjectCardComponent>

                       </li>



              </ul>
              </div>
          </Router>
      </div>
    )
  }
}
export default ProjectComponent;
