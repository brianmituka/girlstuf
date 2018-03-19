import React, { Component } from 'react';
 //import React, { Component } from 'react';
 
 class Product extends Component {
    constructor(props){
		super(props);
    }
     render() {
        let image_url = "http://test.nouveta.tech/girlstuff/api/public/"
        let image = image_url + this.props.image ;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        return(
            <div className="product">
                <div className="product-image-">
                    <img src={image} alt={this.props.name}/>
                </div>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
             </div>
         );
     }
 }
 
 export default Product;