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
        <h2>Projects</h2>
        <p>Mostly Github links for now, planning on categorizing them more </p>
        https://github.com/ErikaVasNormandy
        <ul>
          <li>"https://github.com/ErikaVasNormandy/Scavengers-Repo"</li>
            <li>"https://github.com/ErikaVasNormandy/DeAnza-Ethical-Hacking-Summer2016"</li>
        </ul>

      </div>
    )
  }
}
export default ProjectComponent;
