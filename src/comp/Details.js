import React, { Component } from 'react';
import '../App.css';



class Details extends Component {
  
    constructor(props){
        super(props);
        
        this.state={

        };
      
    }
    
   
  render() {

    return (
        <div className="detailContainer">
            <div className="detailPhoto">
            </div>
            <div className="detailDesc">
                   
                <table className="orderTable">
                    <thead>
                      <tr>
                        <th>
                            Original Chrysanthemum flower tea
                            <br/>
                            $50
                           
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                         As people can vividly look at the natural look of chrysanthemum 
                            flowers within the cup, its tea givesvisual pleasure with its unique
                            delicate scent.
                       
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                         Origin: Korean 100%
                        <br/>
                        Capacity: 10g
                        </tr>
                    </tfoot>
   
                    </table>
            <div id="quantity">
                <input type="button" value="-" id="minus" onclick="minus()"/>
                <input type="text" value="1" min="0" max="100" id="count"/>
                <input type="button" value="+" id="plus" onclick="plus()"/>
            </div>

        
            <button className="addToCart">ADD TO CART</button>
         
        </div>
        </div>
        
    );
  }
}

export default Details;
