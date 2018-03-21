import React, { Component } from 'react';
 
 class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewProduct:{}
        }
    }
    quickView(image, name, price, id){
        this.setState({
            viewProduct: {
                image: image,
                name: name,
                price: price,
                id: id
            }
        }, function(){
            this.props.openView(this.state.viewProduct);
        })
    }
     render() {
        let image_url = "http://test.nouveta.tech/girlstuff/api/public/"
        let image = image_url + this.props.image ;
        //let image = "https://test.nouveta.tech/girlstuff/api/public/product-images/0VKB93wO2hdRnWhhrGE8.jpg";
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
                    {console.log(image)
                    }
                 
                </div>
             </div>
             
         );
     }
 }
 
 export default Product;