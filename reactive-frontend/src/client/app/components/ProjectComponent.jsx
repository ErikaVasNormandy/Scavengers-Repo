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
        <div class="row">
           <div class="col s12 m7">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" style={{height: 80, width: 80}} src="https://i.pinimg.com/736x/8c/a7/21/8ca721aa046919d68bfa3187f548c539--spell-books-open-book.jpg"></img>
            </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
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
