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
     {UsefulBits.map(title =>
       <li>{title}</li>

     )}
   }

  render(){
    {/*

    // console.log(this.props.data);
    const { data } = this.props.data;

    const UsefulBitsArray= data.map(dataList => {
      // console.log(dataList.link);

      return(

          <ul className="collection" key = {dataList.id}>
            <li className="collection-item avatar" style={{background: 'rgba(255,255,255, 0.5'}} >
              <img src={dataList.image} className='circle'></img>
                <h3 className="title">{dataList.link}</h3>
                <p>Brief Description

                     <br></br>
                  Link: {dataList.link}
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>

  </ul>





      );

    });
      */}

    return(
      <div>
        <h1>Useful Bits</h1>
          {this.state.UsefulBits.map((item) =>{ return(<li>{item.title}</li>)}  )}


      </div>
    )
  }
}
export default UsefulBitsComponent;
