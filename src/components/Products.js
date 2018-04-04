import React, { Component } from 'react';
import Product from './Product';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import LoadingProducts from '../loaders/Products';


class Products extends Component {
    constructor() {
        super();
        
    }
    
    render() {
        let productsDetails

        productsDetails = this.props.allProducts.map(product =>{
            return(
                <div>

                     <Product key={Math.random()} price={product.price} name={product.name} image={product.image_url} openView={this.props.openView}/>
                </div>
            
            )
        });
    let display;
    if (productsDetails.length <=0) {
        display = <LoadingProducts />
    } else {
        display = <CSSTransitionGroup
        transitionName = "fadeIn"
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {300}
        component="div"
        className="products">
        {productsDetails}
        </CSSTransitionGroup>  
    }

        return (
            <div className="products-wrapper">
             {display}  
            </div>
        );
    }
}

export default Products;