import React from 'react';
import {render} from 'react-dom';
import UsefulBitsData from '../data/UsefulBits/UsefulBits.json';


class UsefulBitsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      UsefulBits: UsefulBitsData,

    }
  }

   componentDidMount() {

   }

  render(){

    return(
      <div>
        <h1>Useful Bits</h1>
        {
          /*
          Basic Instructions
          {
          this.state.UsefulBits.map((item) =>
              {
                return(<li>{item.title}</li>)
              }
          )}

          */}

          {this.state.UsefulBits.map((item) =>
            {
                return(
                  <div key = {item.title} className="col s9 m4 UsefulBitPiece">
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


                )
            }
            )
          }

      </div>
    )
  }
}
export default UsefulBitsComponent;
