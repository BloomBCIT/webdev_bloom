import React, { Component } from 'react';
import '../App.css';



class Details extends Component {
  
    constructor(props){
        super(props);
        this.state={

        };
        
        this.homePage = this.homePage.bind(this);
        this.productPage = this.productPage.bind(this);
        this.aboutPage = this.aboutPage.bind(this);
        this.orderPage = this.orderPage.bind(this);
        this.accountPage = this.accountPage.bind(this);
        this.searchPage = this.searchPage.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }
    
    homePage(){
        
        var page = "Landing";
        this.props.changePage(page);
    }
 
    productPage(){
        
        var page = "Products";
        this.props.changePage(page);
    }
    
    aboutPage(){
        
        var page = "About";
        this.props.changePage(page);
    }
    
    
    orderPage(){
        
        var page = "Orders";
        this.props.changePage(page);
    }
    
    accountPage(){
        
        var page = "Account";
        this.props.changePage(page);
    }
    
    searchPage(){
        
        var page = "Search";
        this.props.changePage(page);
    }
    addToCart(product){
          console.log(product.inCartCount);
          product.inCartCount++;
          this.props.updateProduct(product);  
    }
    
   
  render() {

    return (
        <div className="container">
            <div className="wrap">
            
                <div className="bloomDiv">
                
                </div>
                
                <div className="navigation">
                    <div className="navHome" onClick={this.homePage}>
                        Home
                    </div>
                    <div className="navProduct" onClick={this.productPage}>
                        Product
                    </div>
                    <div className="navAbout" onClick={this.aboutPage}>
                        About
                    </div>
          
                        <div className="userInfo" onClick={this.accountPage}>
                            <img className="userImg" />
                        </div> 
                        <div className="cart">
                            <img className="cartImg" onClick={this.orderPage} />
                        </div>
                        <div className="search" onClick={this.searchPage}>
                            <img className="searchImg" />
                        </div>
        
                </div>
                
     
            </div>
        
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
                <input type="text" value="1" min="0" max="1000" id="count"/>
                <input type="button" value="+" id="plus" onclick="plus()"/>
            </div>

        
            <button className="addToCart">ADD TO CART</button>
         
        </div>
        </div>
        </div>
    );
  }
}

export default Details;
