import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button/Button";

const circleIcon = {
    //color: grey,
};

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={this.props.icon} size={this.props.size} style={circleIcon}/>
                <h1>{this.props.title}</h1>
                <Button variant={"outlined"}>{this.props.btnText}</Button>
            </div>
        );
    }
}

export default HomeCard;