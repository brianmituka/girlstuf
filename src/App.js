import React, { Component } from 'react';
import Products from './components/Products'
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
    
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
  render() {
    return (
      
      <div className="container">
        {console.log()
        }
        <Products
          allProducts={this.state.products}
				/>
        
      
        
      </div>
    );
  }
}
export default App;
