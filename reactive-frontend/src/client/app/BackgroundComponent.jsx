import * as React from 'react';
import {render} from 'react-dom';
import App from './index.jsx'

class backgroundReact extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div >

        background React!
  <App />

    </div>)
  }


}

render(<backgroundReact/>, document.getElementById('app'));
