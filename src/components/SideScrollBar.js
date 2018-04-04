import {Scrollbars} from 'react-custom-scrollbars'
import React, { Component } from 'react';

class SideScrollBar extends Component {
    constructor(props) {
        super(props);
       // this.handleScroll = this.handleScroll.bind(this)

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)

    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)

    }
    // handleScroll(e) {
    //     const positions = this.refs.Scrollbars.getValues();

    //     if (positions.top >=1) {
    //         e.stopPropagation()
            
    //     }
    // }

    render() {
        return (
            <Scrollbars style={{width:200, height: 320}} ref="scrollbars">
            {this.props.children}
            </Scrollbars>
        );
    }
}


export default SideScrollBar;