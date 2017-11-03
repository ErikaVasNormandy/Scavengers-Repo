import React from 'react';
import {render} from 'react-dom';
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
        <p>Mostly Github links for now, planning on categorizing them more </p>
        https://github.com/ErikaVasNormandy
         <div className="row" style = {{color: 'black'}}>


            <div className="col s4 m4 l4">
               <div className="card large sticky-action">

                    <div className="card-image" >
                        <img className="activator" src="https://orig00.deviantart.net/079e/f/2014/012/e/9/spell_book_and_wand_png_stock_by_jumpfer_stock-d71vg5f.png"></img>
                    </div>

                    <div className="card-content">
                        <span className="activator"><h3>SickOS by Vulnhub </h3></span><i className="material-icons right"></i>

                        <p><a href="https://erikavasnormandy.github.io/sickOS"> --> Subdirectory </a></p>
                        <p><a href="https://www.vulnhub.com/entry/sickos-12,144/">Vulnhub Site Link</a></p>

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
                    <span className="card-title activator grey-text text-darken-4"  >Spellbook Materials</span>
                      <img className="activator " src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Project+Thumbnails/BaseBotThumbnail.png"></img>
                  </div>

                  <div className="card-content">
                      <span className="activator">Website for demonstrating full-stack Web Development </span><i className="material-icons right"></i>

                      <p><a >Github Link: </a></p>
                  </div>

                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Details: <p>All the way from AWS and Gunicorn to Flask and NodeJS</p>

                    <i className="material-icons right"> Click to Close</i></span>
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
      </div>
    )
  }
}
export default ProjectComponent;
