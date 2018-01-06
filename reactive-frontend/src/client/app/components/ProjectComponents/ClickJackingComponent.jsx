import React from 'react';
import {render} from 'react-dom';

class SickOSComponent extends React.Component{
  render(){
    return(
      <div className = "projectComponentDisplay">
        <meta property="og:image" content="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/WebPreview_ClickJacking.png"/>
        <meta property="og:image:secure_url" content="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/WebPreview_ClickJacking.pngg"/>
        <meta property="og:url" content="http://scavengers-repo.com/Projects/ClickJacking"/>
        <meta property="og:description" content="Pen-Testing your own site, and finding out about clickjacking"/>


            <h4 className="mainTitle">Securing Your Own Site:: Clickjacking</h4>
              <img className="centerIllustration" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/Eye+Sketch.png"/>
                <p className="subTitle">Nov 7, 2017</p>
                <p className="subTitle">scavengers-repo.com</p>
                <p className="subTitle">-----</p>



                  <p>How do you make sure your own website is secure? This is usually related to how you or your developer set up the front-end (data input) and back-end.</p>
                  <p>Also, consider whatever back-end services you used since those can be a target too. For example, I use Amazon's AWS services to host Scavengers-Repo, and in February 2017, when "part of the internet broke", I actually did notice show I couldn't push any changes to the EC2 instance while it was going on.</p>
                  <p>The security of whatever back-end services you use for hosting is something that the developers can't do much about.</p>
                  <p>However, we can make things more challenging for any would-be attackers if we can eliminate some of the low-hanging fruit and close up any glaring holes by pen-testing our own sites!</p>
                  <p>Used this site: <a href="https://www.wordfence.com/learn/penetration-testing-your-wordpress-website/">Penetration Testing Your WordPress Website </a> to get started on some of the basic steps of securing your own web application.  </p>


                  <p>There are 4 steps they outline:</p>
                    <ol>
                      <li>Reconaissance</li>
                      <li>Scanning</li>
                      <li>Exploitation</li>
                      <li>Mitigation</li>
                    </ol>


                  <p>Overall, it's very comprehensive and hands-on without too much jargon. I used their steps as a guideline to scan my own site.</p>
                  <p>So with that said, let's get started on some Reconaissance!</p>
                  <p className="subTitle">-----</p>
                  <img className="rightIllustration" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/Wirt.png"></img>

                  <h5>1. Reconaissance</h5>

                  <p>What can we do with a Terminal and a url?</p>
                  <p style={{marginLeft:' 10%'}}> ==>What information can we gather with a url and a Terminal</p>
                  <h2 className="wordart">NsLookup WhoIs + NMap</h2>


                  <p><strong>nslookup</strong></p>
                  <p><img className= "screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack0.png"/></p>
                  <div className="quoteBox">"Nslookup is a program to query Internet domain name servers"
                    <p>(>man nslookup)</p>
                  </div>

                  <p>Use this tool to match Internet URL's to their server IP's</p>
                  <p>I found a web url, maybe a website that a client wants me to test, and ran <strong>nslookup</strong> on it to get an IP</p>
                  <img className= "screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack1.png"/>
                  <p>I've also run a <strong>whois</strong> just to see some more (public!) information about the url</p>
                  <img className="rightIllustration" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/GreyCat.png"/>

                  <p>Usually, I would also run an <strong>nmap</strong>scan on the IP we've just found.</p>
                  <p> Nmap is a Terminal tool that let's us see the services on a particular address (ergo, what kinds of programs is this machine running?). </p>
                  <p>We might be able to exploit them, such as a web server on port 80 that allows uploading files onto it.</p>
                  <p>Since I'm going to be brief, I'll just move on to the Scanning stage to see what we can do with that IP address for this website </p>



                  <h5>2. Scanning</h5>
                    <p>The tutorial in the link says that at this stage, pen-testers use <strong>Fuzzing</strong> on the target. This boils down to sending large amounts of random data to the application</p>
                    <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/bilbobunny.png" className="leftIllustration"/>
                    <p>Hopefully the results will reveal even more information about the target, although this can generate a lot of traffic that an IDS can pick up</p>
                    <p>-->How exactly does the application work?</p>
                    <p>-->Where did the developer make a mistake?</p>
                    <p>The tutorial goes in depth on some available tools, such as SQLMap, WPScan, and Burpsuite.</p>
                    <p>For this tutorial, I picked Nikto because it sounded like the least time-consuming with minimal setup </p>
                    <p><strong> >nikto</strong></p>
                    <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack2_1.png"></img>

                    <p>Well what do you know? the site is on an nginx server, and the developer (me) has not given this site protection against <strong>clickjacking</strong></p>
                    <div className="quoteBox">"...The “clickjacking” attack allows an evil page to click on a “victim site” on behalf of the visitor."
                    </div>
                    https://javascript.info/clickjacking
                    <p>This site gives a pretty good demo of how clickjacking works, but the basic gist is that the bad guy places an invisible iframe over a link or a button you intend to click. </p>

                  <img className="treeDrawing" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/Sketches/tree1.png"></img>
                    <p>It's positioned in a way that clicking on the supposed button will actually cause you to click on the invisible iframe's link instead. </p>



                  <p>Since according to our <strong>nikto</strong> scan, the client site is vulnerable to clickjacking, let's test this out to see for sure. </p>

                  <p>Based off of what javascript.info mentioned, there's a simple way to test this out</p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack2_2.png"/>
                  <p>Just made a random html file with an iframe set to display the client's site. If the iframe vulnerability is present, the iframe will actually display the intended site, such as what we see below</p>


                  <img className = "screenshot" src ="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack3.png"/>
                  <p>It doesn't look like much, but we now have loaded the client site into an iframe </p>
                  <p>If we gradually decrease the opacity</p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack4.png"/>
                  <p>Add a button over the other button </p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack5.png"/>
                  <p>Notice how the current page is set to "Home" and how the iframe has been placed in front of the button so that when we click on that grey button, we really end up clicking on the 'Projects' button in the iframe</p>



                  <p>Looks like it's just a button we can click, but looking at the console shows that the iframe is still there</p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack6.png"/>
                  <p>The iframe is indeed placed over the button as shown when we up the opacity in the console</p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack7.png"/>


                  <p>Set the opacity of the iframe back to 0, and click the button and see what happens</p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack8.png"/>

                  <p>So we might have thought we were clicking on that button, but in reality we clicked on the 'Projects' tab</p>
                  <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack9.png"/>


                <h5>4. Mitigation</h5>
                  <p>So now that we know this vulnerability exists, how do we fix it?</p>
                  <p>javascript.info explains that there are several ways of preventing this either by setting some conditions in the UI to prevent being on the bottom, or by doing some back-end work.</p>
                  <div className="quoteBox">
                      <ol>
                          <li>The oldest defence method is the piece of JavaScript that forbids to open the page in a frame (so-called “framebusting”).</li>
                          <li><strong>Server-side header X-Frame-Options can allow or forbid showing the page inside a frame.</strong></li>
                      </ol>
                  </div>
                        https://javascript.info/clickjacking

                  <p>Since our client is using nginx, we'll be going with the header solution.</p>
                  <p>A quick Google search of 'X-Frame Options' yields some results, such as <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">Mozilla</a>. These sites are usually very informative, but not the most detailed for actually going in and configuring these files </p>
                  <p><a href="https://geekflare.com/add-x-frame-options-nginx/">Geekflare </a>goes into more detail for Nginx, specifically how to configure the nginx.conf file in an /etc folder on an AWS directory</p>

                  <p>The steps are fairly 'simple', we really just need to add a header in nginx.conf </p>
                  <img className = "screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/nginx_aws00.png" class="screenshot"></img>
                  <p>The challenge is figuring out where to put it. </p>
                  <img className = "screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/nginx_aws01.png" class="screenshot"></img>


                  <p> This can depend on how you've set up your nginx or apache. I had to put it in the 'location' bracket right above where I set up the proxy_pass</p>
                  <p> I looked at <a href="https://github.com/JMStudiosJoe/ReactPractice/blob/JMStudiosReact/nginx/nginx.conf">JMStudio's repo</a> for reference</p>
                  <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/nginx_aws02.png" className ="screenshot"></img>
                  https://github.com/JMStudiosJoe/ReactPractice/blob/JMStudiosReact/nginx/nginx.conf
                  <p>also:</p>
                  https://github.com/nextcloud/server/issues/4863

                  <p>So when we go back to our plain old html file and try to load it, we can see that the iframe no longer displays. </p>
                  <p>Notice based on the console that the material is still there, just not displaying</p>
                  <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack10.png" className="screenshot"></img>


                  <p> In fact, if we look at the console itself, it looks like loading the iframe itself throws an error</p>
                  <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack11.png" className="screenshot"></img>
                  <p>And when we scan the url again, the same error no longer shows up </p>
                  <h5>Before::</h5>
                    <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/clickjack2_1.png" className="screenshot"></img>
                  <h5>After::</h5>
                  <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/ClickJacking/Screen+Shot+2017-12-10+at+10.43.38+PM.png" className="screenshot"></img>
                  <p>So in a nutshell, we scanned a website with nikto, found a vulnerability, and then figured out how to fix that vulnerability.
                    </p>
                  <p>All it really took was a line change and some tweaking on the backend, but it goes to show how easy it is to overlook web security</p>



                </div>

    )
  }
}

export default SickOSComponent;
