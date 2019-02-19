import React, { Component } from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        this.classes = this.props.classes;
        return (
            <div className={'cart'}>
                <h1>Shopping  Cart</h1>
            </div>
        );
    }

}


export default Cart;

