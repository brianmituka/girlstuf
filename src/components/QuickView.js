import React, { Component } from 'react'
import ReactDOM  from 'react-dom'

class QuickView extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        
    }


// method called before the component is rendered, it adds the click listener and binds it to that()  
// so the closeView Method is the issue!!  
    componentWillMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true)
    }
    //removes the event listener when activity is destroyed
    componentWillReceiveProps() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true)
    }
    //method for closing the view!
    handleClickOutside(event){
        // it finds the modal using the ref
        const domNode = ReactDOM.findDOMNode(this.refs.modal);
        if (!domNode || !domNode.contains(event.target)) {
          //this.closeView();
        } 
    }
    handleClose(){
        //this.closeView();
    }
    render() {
        return (
            <div className={this.props.openView ? "modal-wrapper active" : "modal-wrapper"}>
            {console.log(this.props)
            }
        <div className="modal" ref="modal">
          <button type="button" className="close" onClick={this.handleClose.bind(this)}>&times;</button>
          <div className="quick-view">
            <div className="quick-view-image"><img src={this.props.product.image} alt={this.props.product.name}/></div>
            <div className="quick-view-details">
              <span className="product-name">{this.props.product.name}</span>
              <span className="product-price">{this.props.product.price}</span>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default QuickView;
