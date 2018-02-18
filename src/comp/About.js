import React, { Component } from 'react';
import '../App.css';
import Map from './maps/Map';

class About extends Component {
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
    
  render() {

    return (
        <div className="Pcontainer">
            <div className="wrap">
                <div className="bloomDiv">
                
                </div>
                <div className="navigation">
                    
                 
                        <div className="navHome" onClick= {this.homePage}>
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
        
            <div className="aboutBg">
                <div className="aboutP">About Us
                </div>
            </div>
            <div className="aboutUs">
                <div className="aboutDetail">
                    Our story began in 2011 in a small factory shop in the middle of Mexico City. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.

                    <br/>
                    We started making the products we wanted to see in the world and we did this with an uncompromising approach to sustainability and environmental affects.  We promote our products because we believe in them and we stand behind our product.

                    <br/>
                    Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in. We hope they’ll inspire you too.
                </div>
            </div>
            <div>
                <h4>Our Location</h4>
                <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px`, width: '50%', margin: 'auto' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
        
    );
  }
}
        
        
export default About;
