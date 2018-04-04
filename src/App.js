import React, { Component } from 'react';

import axios from 'axios';
import Header from './components/Header'
import Gallery from './components/Gallery'
import Products from './components/Products'
import Footer from './components/Footer'

//import Navigation from './components/Navigation'

import QuickView from './components/QuickView';


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      navigation : [],
      viewProduct: {},
      productModalActive: false
    }
    this.openView = this.openView.bind(this);
    this.closeView = this.closeView.bind(this)

  }
  getProducts(){
    const url = "https://test.nouveta.tech/girlstuff/api/public/api/frontend/products"
    axios.get(url)
    .then(response =>{
     //console.log(response.data.data);
      this.setState({
        products:response.data.data
      })
     
      
    })
   
    
  }
  componentWillMount (){
    this.getProducts()
  }
  //view Product
  openView(product){
    this.setState({
      viewProduct: product,
      productModalActive: true
    })
    console.log("state should be true", this.state.productModalActive);
  }
  //close product view
  closeView(){
    this.setState({
    
      productModalActive: false
    })
    console.log("state should be false", this.state.productModalActive);
    
  }
  render() {
    return (
      
      <div className="container">
      <Header	/>
       <Gallery />
        <Products
          allProducts={this.state.products}
          openView={this.openView}
				/>
        {/* <Navigation  displayItems={this.state.navigation} /> */}
        <Footer />
        <QuickView product={this.state.viewProduct} openView={this.state.productModalActive} closeView={this.closeView}/>
        
        
      
        
      </div>
    );
  }
}
export default App;
