import React, { Component } from 'react';
import Landing from './comp/Landing';
import Products from './comp/Products';
import Orders from './comp/Orders';
import About from './comp/About';
import Checkout from './comp/Checkout';
import Account from './comp/Account';
import Search from './comp/Search';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            page:"",
        }
        this.changePage = this.changePage.bind(this);
 
        
    }
    
    changePage(data){
        this.setState({
            page:data
        })
    }

    
  render() {
      var comp = null;
      
      if(this.state.page =="" ||this.state.page =="Landing"){
          comp = <Landing changePage = {this.changePage} />
      
      }else if(this.state.page == "Products"){
          comp = <Products changePage = {this.changePage} />
      
      }else if(this.state.page == "About"){
          comp = <About changePage = {this.changePage} />
      
      }else if(this.state.page == "Orders"){
          comp = <Orders changePage = {this.changePage} />
      
      }else if(this.state.page == "Checkout"){
          comp = <Checkout changePage = {this.changePage} />
      
      }else if(this.state.page == "Account"){
          comp = <Account changePage = {this.changePage} />
      
      }else if(this.state.page == "Search"){
          comp = <Search changePage = {this.changePage} />
      
      }
    return (
      <div className="App">
        {comp}
        
      </div>
    );
  }
}

export default App;
