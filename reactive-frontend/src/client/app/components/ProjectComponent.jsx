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
                            <span className="card-title" style={{width:100}}>Sample1</span>
                    </div>
                    <div className="card-content">
                               <p>A collection of pages from my Cybersecurity notes over the years</p>
                    </div>
                    <div className="card-action">
                          <p>card action</p>
                    </div>
                      <div className="card-reveal"><p></p></div>
                </div>
            </div>

            <div className="col m4">
               <div className="card sticky-action">
                      <div className="card-image ">
                        <img className="activator"src="http://www.ilikewallpaper.net/ipad-wallpapers/download/2268/Square-Pattern-ipad-wallpaper-ilikewallpaper_com.jpg"></img>
                            <span className="card-title" style={{width:100}}>Sample2</span>
                      </div>
                      <div className="card-content">
                          <p></p>
                      </div>
                      <div className="card-action">
                          <a href="#">This is a link</a>
                      </div>
                        <div className="card-reveal">...</div>
              </div>
            </div>



        </div>




        <ul>

          <li>"https://github.com/ErikaVasNormandy/Scavengers-Repo"</li>
          <li>"https://github.com/ErikaVasNormandy/DeAnza-Ethical-Hacking-Summer2016"</li>
        </ul>




      </div>
    )
  }
}
export default ProjectComponent;
