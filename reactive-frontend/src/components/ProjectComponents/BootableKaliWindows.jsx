import React from 'react';
import {render} from 'react-dom';

class BootableKaliWindowsComponent extends React.Component{
  render(){
    return(
      <div>
        <img className="centerIllustration2" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/PORG1.png"></img>

        <h4 style={{textAlign: 'center'}}>Booting a Kali Linux Machine from a USB (Windows version)</h4>
        <p>Tutorial followed: </p>
        <p> <iframe width="200px" height="150px" src="https://www.youtube.com/embed/dxf_YT3roCc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
        <p>I broke my VM the other day after a bout of winter cleaning. Rather than spin up another one like I usually do, I thought it'd be a neat exercise to make a bootable version.  </p>

        <p><strong>Booting</strong> is the <u>sequence</u> the <u>operating system</u> takes when the computer turns on (<a href="http://openbookproject.net/courses/intro2ict/hardware/booting.html">openbookproject.net</a>)</p>

          <p>What does the computer actually do when you turn it on?</p>
            <p>The OpenBookProject link above goes into much more detail, such as the chain reaction of events and the order in which these events occur.</p>
            <p>Visualization:</p>
            <p><iframe width="200" height="150" src="https://www.youtube.com/embed/PSnGuvylWBI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
            <p>But what we're mainly concerned about is the devices needed to boot from a Windows machine onto a Linux one from a flashdrive </p>


            <div className="ingredientsList">
              <h6>Ingredients:</h6>
            <ul>
              <li>&emsp; - &emsp;<a href="https://www.kali.org/downloads/">Kali Linux ISO (full version)</a></li>
              <li>&emsp; - &emsp;<a href="https://universal-usb-installer.en.softonic.com/">Universal USB Installer</a></li>
              <li>&emsp; - &emsp;<a href="https://www.partitionwizard.com/free-partition-manager.html">MiniTool Partition Wizard</a></li>
              <li>&emsp; - &emsp;USB flashdrive (>16gb)</li>
            </ul>
          </div>

          <img className="rightIllustration2" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/Gen1AtomcraftSuit.png"></img>

          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>

          <ol>
            <h6>Our steps involve::</h6>
            <li>Download Materials</li>
            <li>USB installer formatting</li>
            <li>Partitioning for persistence</li>
            <li>Configuring and then terminal commands within the Linux for mounting</li>
          </ol>

          <h6> <b>0. Download Materials + Setup</b></h6>
          <p>the Kali Linux ISO from https://www.kali.org/downloads/, Universal USB Installer, https://universal-usb-installer.en.softonic.com/, MiniTool Partition Wizard https://www.partitionwizard.com/free-partition-manager.html,
          </p>
          <p>Also format the USB drive, which erases all of the contents on it. Mine was set to FAT32 by default</p>

          <h6><b> 1. Open up Universal USB Installer with the USB plugged in</b></h6>
          <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/0_FormatUSB.png" className="screenshot"></img>
          <p>Settings :: </p>
          <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/1_formatUSB.png" className="smallerScreenshot_a"></img>

          <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/2_0_FormatUSB_with_UniversalUSB.png" className="smallerScreenshot_b"></img>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
            <p>&nbsp; </p>
          <p>Results --> </p>

        <p>There are a lot of different tools we could have used for this part, and due to compatibility issues (yay Windows), one tool that works in this tutorial might work for some and it might not work for you.</p>
        <p>Another one I tried was Rufus & Linux Live. Kali Linux officially recommends win32, but I ran into some issues using that one along with Linux Live. Rufus worked easily, but apparently did not allow for partitioning, which will be crucial for Persistence feature</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/2_52_formatusb.png" className="smallerScreenshot_b"></img>

        <p>Product so far:: &nbsp;
        A bootable USB with a live Kali Linux install. </p>
        <p style={{fontSize: '0.6em'}}>Note: if you’re not familiar with Live installations, this just means that whatever files we save or settings we’ve downloaded won’t carry on the next time we power up the installation</p>

        <p> &nbsp;  Result + Install</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/3_.png" className="screenshot"></img>

        <h6><b>2. Minitool Partition Wizard: </b></h6>
        <p>You only need the free version</p>

        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/4_0partitionWiz.png" className="screenshot"></img>
        <p>Select USB disk and Move/Resize it</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/4_1partitionWiz.png" className="screenshot"></img>


        <p>Apply some changes to set aside some space for our partition</p>

        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/4_2partitionWiz.png" className="smallerScreenshot_b"></img>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
        <p>Once space has been allocated, we need to format that so select it:</p>

        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/4_3PartitionWiz.png" className="smallerScreenshot_b"></img>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
          <p>&nbsp; </p>
      <p>Partition settings::</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/4_4.png"className="screenshot"></img>

        <p>End Result + Apply changes </p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/4_6.png" className="screenshot"></img>

        <p>Product so far:: &nbsp;
         A live Kali Linux installation on a USB stick. We will boot into the Linux itself and from the Terminal on there, configure it to enable Persistence</p>
       <h6><b>3. Some Terminal for Persistence Setup</b></h6>
       <p><b>Boot</b> into your Linux. </p>
       <p>USB must be plugged in </p>
       <p>If you've never done it before, usually this is just pressing down on the F2 or F12 key the moment you turn on the computer.  </p>
       <p>You may need to change some settings in your BIOS depending on your computer. My Lenovo wanted me to enable Legacy settings in addition to UEFI</p>
       <p>However you get into your BIOS, if Universal USB has worked, you should see this General UDisk option appear. If not, try a different USB port</p>

       <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_1Terminal.jpg" className="smallerScreenshot_b"></img>

        <p>After booting into the General UDisk, it will almost be like starting up a VM except that we want to pick "Live System (persistence)"</p>

        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_2Terminal.png" className="smallerScreenshot_b"></img>
         <p>&nbsp; </p>
         <p>&nbsp; </p>
         <p>&nbsp; </p>
         <p>&nbsp; </p>
         <p>&nbsp; </p>
         <p>&nbsp; </p>
         <p>&nbsp; </p>
          <p>&nbsp; </p>
       <p>Note how the desktop has a Volume on it</p>
      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_3Terminal.jpg" className="screenshot"></img>

      <p>Some tools: fdisk, gparted</p>

      <p>Open up Terminal and then type</p>
      <p>>fdisk -l</p>
      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_4Fdisk.jpg" className="screenshot"></img>

      <p>We want to see the paths to our space that we will be mounting as the persistent folder. In this case, /dev/sdb1
      </p>

      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_5Terminal.jpg" className="screenshot"></img>
      <p>The ‘Device’ we are interested in is /dev/sdb2. The type really should be a Ext4, but this can be fixed fairly easily with gparted

      </p>
      <p>In your Linux's Terminal, type in </p>
      <p>>gparted</p>
      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_6Gparted.jpg" className="screenshot"></img>
      <p>Select the smaller volume we want to set aside for persistent storage</p>
      <p>I had to resize it just a bit and then reformat it to ext4. ‘Apply’</p>
      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_62Gparted.jpg" className="screenshot"></img>


      <p>Results:</p>
      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_7Gparted.jpg" className="screenshot"></img>

      <p>Now if you do fdisk again, you can see the changes</p>
      <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_8Gparted.jpg" className="screenshot"></img>

      <p>From here it's only a few terminal commands to make a folder, mount it to said space, and then create a conf file that allows for persistence </p>
      <img className="screenshot" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/5_9Terminal.jpg"></img>
      <p>What's happening here is we are </p>

        <p><b>>mkdir -p /mnt/[my_usb]</b></p>
        <p>&emsp; Making a directory in the /etc/mnt folder</p>

        <p><b>>mount /dev/sdb2 /mnt/my_usb</b></p>
        <p>&emsp; "Mounting" this folder we made to the space we found in fdisk</p>
        <p>&emsp; "...The mount command serves to attach the filesystem found on some device to the big file tree. Conversely, the umount(8) command will detach it again." - >man mount</p>

        <p><b>>echo "/ union" > /mnt/my_usb/ <u>persistence.conf</u></b></p>
        <p>&emsp; "echo" can be usd to make files from a Terminal. However you want to do it, we need a file in the /mnt/my_usb folder named <b>persistence.conf</b>. This conf file only needs 1 line "/ union" to tell it to actual store the changes </p>
        <p>&emsp; persistence.conf documentation--> <a href="http://manpages.ubuntu.com/manpages/trusty/man5/persistence.conf.5.html">manpages.ubuntu.com</a></p>

        <p><b>>umount</b> /dev/sdb2</p>
        <p>&emsp; unmount aka disconnect the two folders after we've made those changes</p>

        <p>Attempts:</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/6_0Results.jpg" className="screenshot"></img>
        <p>Notice how the the folder actually disappears, and how we should not be in the folder we are trying to mount and unmount</p>

        <p>Success!</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/6_1Results.jpg" className="screenshot"></img>

        <p>After much coaxing, I managed to get a it to work on my Mom's 5+ year old computer, although apparently the mouse would not work and no one could figure why : /</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/6_2Results.jpg" className="screenshot"></img>
        <p>Starting it up...</p>

        <img style={{width: '50%', marginRight: '20', marginLeft:'20', marginBottom:'20'}} className="smallerScreenshot_b" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/Results_5.JPG"></img>
        <img style={{width: '50%', marginRight: '20', marginLeft:'20', marginBottom:'20'}} className="smallerScreenshot_b" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/Results_6.JPG"></img>

        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>&nbsp; </p>
        <p>It does work!</p>
        <img style={{width: '50%', marginRight: '20', marginLeft:'20', marginBottom:'20'}} src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/Results_7.JPG"></img>

        <img style={{width: '50%', marginRight: '20', marginLeft:'20', marginBottom:'20'}} src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/Results_8.JPG"></img>

        <p>This BB-8 flashdrive originally held the map to Luke Skywalker, but now it has a Kali Linux I can drop into a PC at any moment : )</p>
        <img src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/staticWebPages/BootableKaliLinux/Windows/6_3Results.JPG" className="screenshot"></img>
        <p>Mac Version in progress</p>
    </div>
    )
  }
}

export default BootableKaliWindowsComponent ;
