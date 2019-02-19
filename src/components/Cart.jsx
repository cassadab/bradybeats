import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CartTrack from './CartTrack';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        this.classes = this.props.classes;
        return (
            <div className={'cart'}>
                <h1>Cart</h1>
                <div className={"cart-contents"}>
                    <Grid container spacing={8}>
                        <Grid item lg={9} md={9}><h2>Track</h2></Grid>
                        <Grid item lg={3} md={3}><h2>Price</h2></Grid>
                    </Grid>
                    <CartTrack />
                </div>
            </div>
        );
    }

}

export default Cart;

