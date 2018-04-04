import SideScrollBar from './SideScrollBar'

import React, { Component } from 'react';

class Navigation extends Component {
constructor(props) {
    super(props);
    this.state = {
        navigation : this.props.displayItems
    }
}

    

    render() {
        const items = [
            {
                
                "name": "Brocolli - 1 Kg"

            },
            {
                
                "name": "Cauliflower - 1 Kg",
                
            },
            {
                "name": "Cucumber - 1 Kg",
            },
            {
               
                "name": "Beetroot - 1 Kg",
            },
            {
                
                "name": "Carrot - 1 Kg",
            },
            {
                
                "name": "Tomato - 1 Kg",
                
            }
         
        ]
        let displayItems;
        displayItems = items.map(item => {
            
            return (
                <h2 className="cart-item" key={item.name}>
            
                    <div className="product-info">
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">{"yolo"}</p>
                    </div>
                
                </h2>
            );
            
        })
        return (
            <div>
              <SideScrollBar>
                  {displayItems}</SideScrollBar>   
            </div>
        );
    }
}

export default Navigation;
