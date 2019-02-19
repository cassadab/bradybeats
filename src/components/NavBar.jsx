import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Modal from 'react-modal';
import Cart from './Cart';

Modal.setAppElement('#root');

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            itemsInCart: 0,
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }



    openModal() {
        console.log("Opening modal");
        this.setState({modalIsOpen: true});
      }
    
    afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
    }
    
    closeModal() {
    this.setState({modalIsOpen: false});
    }

    toggleModal() {
        this.state.modalIsOpen ? this.closeModal(): this.openModal();
    }
      
    render() {
        this.classes = this.props.classes;
        return (
            <div className={this.classes.root}>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className={"modal-content"}
                    overlayClassName={"modal-overlay"}
                    contentLabel="Example Modal">
                    <button onClick={this.toggleModal}>Close</button>
                    <Cart />
                </Modal>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" className={this.classes.grow}>
                        BradyBeats
                    </Typography>
                        <IconButton color="inherit" onClick={this.toggleModal}>
                            <Badge badgeContent={this.state.itemsInCart} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

