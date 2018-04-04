import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
            <div className="container">
                <div className="brand">
                    <img className="logo" src="https://test.nouveta.tech/girlstuff/api/public/product-images/logo.png" alt="Girlstuff Logo"/>
                </div>
                    
                <div className="search">
                    <a className="mobile-search" href="#"><img src="https://test.nouveta.tech/girlstuff/api/public/product-images/magnito.png" alt="search"/></a>
                    <form action="#" method="get">
                        <a className="back-button" href="#"><img src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png" alt="back"/></a>
                        <input type="search" ref="searchBox" placeholder="Search for girly stuff" className="search-keyword"/>
                        <button className="search-button" type="submit"></button>
                    </form>
                </div>

                <div className="cart"> 
                    <div className="cart-info">
                        <table>
                            <tbody>
                                <tr>
                                    <td>No. of items</td>
                                    <td> :10</td>
                                    <td><strong></strong></td>
                                </tr>
                                <tr>
                                    <td>Sub Total</td>
                                    <td>:5500</td>
                                    <td><strong></strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a className="cart-icon" href="#" ref="cartButton">
                        <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/shoppp.png" alt="Cart"/>
                    </a>
                    <div ref="cartPreview">
                        <div className="action-block">
                            {/* <button type="button">PROCEED TO CHECKOUT</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;