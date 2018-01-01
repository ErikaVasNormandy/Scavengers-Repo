import React from 'react';
import {render} from 'react-dom';
import ProjectCardComponent from './ProjectCardComponent/ProjectCardComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SickOSComponent from './SickOSComponent.jsx';


import styles from '../styles.css';

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);
  }



  render(){
    return(
      <div>
        <h1>Projects</h1>
          <Router>
          <div>

              <Link to="/sickOs" style = {{ color: 'white'}} >
              <ProjectCardComponent
                  projectTitle="SickOS"
                  projectDescription="Hack a vulnerable VM with shells and Ubuntu privilege escalation. All you need is VirtualBox and an Internet Browser. Overall this activity was mildly difficult if you have no prior experience of pen-testing, so it is a good application of the concepts that a class might teach you."
                  projectImg="https://orig00.deviantart.net/079e/f/2014/012/e/9/spell_book_and_wand_png_stock_by_jumpfer_stock-d71vg5f.png"
                >

                </ProjectCardComponent>
                </Link>


          <ProjectCardComponent
            projectTitle="Clickjacking"
            projectDescription="Wanted to test out my own site to see if it was vulnerable. The tutorial might be specifically for Wordpress sites, but the basic principles are the same, and it's fairly easy to follow without being too simplistic"
            projectImg="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/Eye+Sketch.png"
            >
          </ProjectCardComponent>

          <ProjectCardComponent
            projectTitle="Scavengers' Repo"
            projectDescription="All the way from AWS and Gunicorn to Flask and NodeJS"
            projectImg="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Project+Thumbnails/BaseBotThumbnail.png"
            projectLink="https://github.com/ErikaVasNormandy/Scavengers-Repo"

            >
          </ProjectCardComponent>
          <Switch>
          <Route path="/sickOS" component={SickOSComponent}/>
          </Switch>


        </div>
        </Router>


      </div>
    )
  }
}
export default ProjectComponent;


/*
<div className="row" style = {{color: 'black'}}>

   <div className="col s4 m4 l4">
      <div className="card large sticky-action">
           <div className="card-image" >
               <img className="activator" src="https://orig00.deviantart.net/079e/f/2014/012/e/9/spell_book_and_wand_png_stock_by_jumpfer_stock-d71vg5f.png"></img>
           </div>

           <div className="card-content">
               <span className="activator"><h3>SickOS </h3><p>by Vulnhub </p></span>
           </div>

           <div className="card-action">
             <a href="https://erikavasnormandy.github.io/sickOS.html">Subdirectory </a>
             <a href="https://www.vulnhub.com/entry/sickos-12,144/">Vulnhub</a>
           </div>

           <div className="card-reveal">
             <p style={{align: 'center'}}>Hack a vulnerable VM with shells and Ubuntu privilege escalation. All you need is VirtualBox and an Internet Browser. Overall this activity was mildly difficult if you have no prior experience of pen-testing, so it is a good application of the concepts that a class might teach you.</p>
             <span className="card-title grey-text text-darken-4">
             <i className="material-icons right"> Click to Close</i></span>
           </div>
   </div>
 </div>

 <div className="col s4 m4 l4">
    <div className="card large sticky-action">
         <div className="card-image" >
             <img className="activator" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/Eye+Sketch.png"></img>
         </div>

         <div className="card-content">
             <span className="activator"><h3>Clickjacking</h3><p>Pen-testing your own website, fixing up a hole.</p></span>
         </div>

         <div className="card-action">
           <a href="https://erikavasnormandy.github.io/ClickJacking">Github Link</a>
           <a href="https://www.wordfence.com/learn/penetration-testing-your-wordpress-website/">Tutorial Followed</a>
         </div>

         <div className="card-reveal">
           <p style={{align: 'center'}}>Wanted to test out my own site to see if it was vulnerable. The tutorial might be specifically for Wordpress sites, but the basic principles are the same, and it's fairly easy to follow without being too simplistic</p>
           <span className="card-title grey-text text-darken-4">
           <i className="material-icons right"> Click to Close</i></span>
         </div>
       </div>
</div>



 <div className="col s4 m4 l4">
    <div className="card large sticky-action">

         <div className="card-image" >
           <span className="card-title activator grey-text text-darken-4"  >Spellbook Materials</span>
             <img className="activator" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Project+Thumbnails/BaseBotThumbnail.png"></img>
         </div>

         <div className="card-content">
             <span className="activator">Website for demonstrating full-stack Web Development </span><i className="material-icons right"></i>

         </div>

         <div className="card-action">
             <a href="https://github.com/ErikaVasNormandy/Scavengers-Repo">Github Link</a>

         </div>

         <div className="card-reveal">
           <p style={{align: 'center'}}> All the way from AWS and Gunicorn to Flask and NodeJS</p>
           <span className="card-title grey-text text-darken-4">
               <i className="material-icons right"> Click to Close</i>
           </span>
         </div>

       </div>
   </div>


   <div className="col s4 m4 l4">
      <div className="card large sticky-action">

           <div className="card-image">
               <img className="activator" src="https://www.neto.com.au/assets/images/default_product.gif"></img>
           </div>

           <div className="card-content">
               <span className="activator">A collection of pages from my Cybersecurity notes over the years</span><i className="material-icons right"></i>

               <p><a >Github Link: </a></p>
           </div>

           <div className="card-reveal">
             <span className="card-title grey-text text-darken-4">Details: <p>Pages from each notebook uploaded</p>

             <i className="material-icons right"> Click to Close</i></span>
           </div>

         </div>
       </div>


</div>
*/
