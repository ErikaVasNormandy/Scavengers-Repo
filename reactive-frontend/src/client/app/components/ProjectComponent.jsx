import React from 'react';
import {render} from 'react-dom';
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


            <div className="col m4">
               <div className="card sticky-action">

                    <div className="card-image">
                        <img className="activator" src="https://i.pinimg.com/736x/8c/a7/21/8ca721aa046919d68bfa3187f548c539--spell-books-open-book.jpg"></img>
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


          <div className="col m4">
             <div className="card sticky-action">

                  <div className="card-image">
                    <span className="card-title activator grey-text text-darken-4">Spellbook Materials</span>
                      <img className="activator " src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/BaseBot.png"></img>
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
            <div className="col m4">
               <div className="card sticky-action">

                    <div className="card-image">
                        <img className="activator" src=""></img>
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

          <li>"https://github.com/ErikaVasNormandy/Scavengers-Repo"</li>


      </div>
    )
  }
}
export default ProjectComponent;
