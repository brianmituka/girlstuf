import React, { Component } from 'react';
import Products from './components/Products'
import axios from 'axios';
import QuickView from './components/QuickView';
import Footer from './components/Footer'
import Gallery from './components/Gallery'


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
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
      console.log(response.data.data);
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

  }
  //close product view
  closeView(){
    this.setState({
    
      productModalActive: false
    })
  }
  render() {
    return (
      
      <div className="container">
        <Products
          allProducts={this.state.products}
          openView={this.openView}
				/>
        <Footer />
        <QuickView product={this.state.viewProduct} openView={this.state.productModalActive} closeView={this.closeView}/>
      
        
      </div>
    );
  }
}
export default App;
