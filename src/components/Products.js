import React, { Component } from 'react';
import Product from './Product';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class Products extends Component {
    constructor() {
        super();
        
    }
    
    render() {
        let productsDetails

        productsDetails = this.props.allProducts.map(product =>{
            return(
                <div>
                    {console.log(product)
                    }
                     <Product key={product.id} price={product.price} name={product.name} image={product.image}/>
                </div>
            
            )
        });
    let display;
    display = <CSSTransitionGroup
        transitionName = "fadeIn"
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {300}
        component="div"
        className="products">
        {productsDetails}
        </CSSTransitionGroup> 
   
        return (
            <div className="products-wrapper">
                
                
                {console.log("this is the allproducts" ,this.props.allProducts)
                }
             {display}  
             {/* {productsDetails} */}
            </div>
        );
    }
}

export default Products;