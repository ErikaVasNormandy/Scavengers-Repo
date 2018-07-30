import React from 'react';
import {render} from 'react-dom';
import UsefulBitsData from '../data/UsefulBits/UsefulBits.json';

const activeBit ={
 display: "inline"
}

const inactiveBit={
  display: "none"
}

var tagsArray=[]


class UsefulBitsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      UsefulBits: UsefulBitsData,
      bitStatus: inactiveBit,
      isHidden: true
    }
    this.createArray = this.createArray.bind(this);
    this.sortByTags = this.sortByTags.bind(this);
    this.createArray()

  }



  createArray(){
    var i = 0;
    for(i = 0; i < this.state.UsefulBits.length; i++){
        // console.log(this.state.UsefulBits[i].tags)
        var j = 0;
        for(j=0; j < this.state.UsefulBits[i].tags.length; j++){
          tagsArray.push(this.state.UsefulBits[i].tags[j])
        }
      }
      tagsArray = tagsArray.filter(function(elem, index, self){
        return index === self.indexOf(elem);
      })
      console.log(tagsArray)
    }


  sortByTags(e, tagInput1, tagInput2){
    if(tagInput1 = tagInput2 )
    this.setState({
      isHidden: !this.state.isHidden
    })
    console.log("clicked")
    //
    // if(this.setState.bitStatus=inactiveBit){
    //   this.setState({ bitStatus: activeBit })
    //   console.log("was inactive")
    // }
    // else{
    //   this.setState({ bitStatus: inactiveBit})
    //   console.log("was active")
    // }


    // if(this.setState.bitStatus=activeBit){
    //   this.setState({ bitStatus: inactiveBit })
    //   console.log("was active")
    // }
    // else{
    //   this.setState({ bitStatus: activeBit})
    //   console.log("was inactive")
    // }

  }

  componentDidMount(){
    this.setState({bitStatus: inactiveBit})
  }

  componentWillUnmount(){
    clearInterval(this.state.bitStatus);
  }

  render(){
    return(
      <div>
        <h1>Useful Bits</h1>

{/*//////////////////////////////////////////////////////////////////////*/}
        <div id="UsefulBtns">
          {
            tagsArray.map((potentialTag) =>
            {
              return(
                <button className ="waves-effect waves-light btn-flat" onClick = {this.sortByTags.bind(this, {potentialTag}, {potentialTag})}>
                  {potentialTag}
                </button>
              )
            }
          )}
        </div>
{/*//////////////////////////////////////////////////////////////////////*/}

        <div>
          {this.state.UsefulBits.map((item) =>
            {
              return(
                <div>
                  {!this.state.isHidden &&
                    <div key = {item.title} className="col s9 m4 UsefulBitPiece" >
                      <div className="card horizontal">
                        <div className="card-image">
                          <img className = "cardImg" src= {item.imageaddress}/>
                          </div>
                          <div className="card-stacked">
                            <div className="card-content">
                              <h6><strong>{item.title}</strong></h6>
                              <p>{item.description}</p>
                              <p>tags: {item.tags.join(", ")}</p>
                            </div>
                            <div className="card-action">
                               <h6><a href={item.address}>[Link] </a></h6>
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                </div>
                )
              }
              )
            }
          </div>
  {/*//////////////////////////////////////////////////////////////////////*/}
      </div>
      )
    }
}


export default UsefulBitsComponent;
