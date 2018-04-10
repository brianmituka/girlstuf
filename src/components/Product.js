import React, { Component } from 'react';
 
 class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProduct: {},
            viewProduct:{},
            addedToCart: false
        }
    }

    addToCart(image,name,price,id,quantity){
        this.setState({
            selectedProduct: {
                image:image,
                name:name,
                price:price,
                id:id,
                quantity:quantity
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct)
        })
        this.setState({
            addedToCart:true
        }, function(){
            setTimeout(() => {
                this.setState({
                    addedToCart: true,
                    selectedProduct:{}
                })
                
            }, 3000);

        })

    }
    quickView(image, name, price){
        this.setState({
            viewProduct: {
                image: image,
                name: name,
                price: price,
            }
        }, function(){
            this.props.openView(this.state.viewProduct);
        })
    }
     render() {
        let image_url = "https://test.nouveta.tech/girlstuff/api/public/"
        let image = image_url + this.props.image ;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        
        return(
            <div className="product">
                <div className="product-image">
                    <img src={image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id)}/>
                </div>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
                <div className="product-action">
                    <button type="button">ADD</button>
                </div>
             </div>
             
         );
     }
 }
 
 export default Product;