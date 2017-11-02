import React from 'react';
import {render} from 'react-dom';

class SickOSComponent extends React.Component{
  render(){
    return(
      <div>
        <h1>Home</h1>
        <p><small>Website is currently under construction</small></p>

        <p>If you're reading this, you've found my webpage/portfolio.
        I started working on this back in January 2017 as a way to learn
          scalable web development and get a taste of the AWS stack.</p>
        <p>My main focus is going to be Cybersecurity, with a focus on Web App
        vulnerabilities since nearly everyone uses web apps nowadays. I started
        out as a mobile/web developer, but have gotten interested in Cybersecurity.
      </p>
      <p>Cybersecurity is such a broad field, so it's difficult to start out
        when theres not a clear path on how to get there. The hackers we see in
        media such as Mr. Roboto or Watch Dogs would probably fall under the
        category of penetration testers, and even penetration testers have a lot
        of different categories and specializations they can fit into. </p>
      <p>This generalization makes it difficult for newer people to start out.
      Most resources and tutorials are either too simple or too difficult, with
    the result being that either the skills are not relevant for a pen-testing job,
    or is so difficult that not much can be learned at all. </p>

    <p>This website is for displaying whatever projects from either my classes
      or my mentors that I found to be straightforward, but challenging enough
      to teach new skills without an in depth technical background. Each project
      will have documention, links, and notes to recreate issues and solve the problem</p>


    <p>I also put in some nice backgrounds to inspire some creativity</p>
      
      </div>
    )
  }
}

export default SickOSComponent;
