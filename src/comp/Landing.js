import React, { Component } from 'react';
import '../App.css';
import Products from '../comp/Products';

class Landing extends Component {
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
        this.login = this.login.bind(this);
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
    login(){
        var page = "Login";
        this.props.changePage(page);
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
                        <div className="login" onClick={this.login}>
                            Login
                        </div>

                </div>
                
     
            </div>
        
            <div className="shopnow" onClick={this.productPage}></div>
        
        </div>
    );
  }
}
        
        
export default Landing;
