import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
var scrollToElement = require('scroll-to-element');


class LicensingCard extends React.Component {
    constructor(props) {
        super(props);

        this.browseClicked = this.browseClicked.bind(this);
    }

    render() {
        return (
            <div>
                <Card className={"licensing-card"}>
                    <h2>{this.props.title}</h2>
                    <h3>${this.props.price}</h3>
                    <div className={"license-details"}>
                        {this.props.termsList}
                    </div>
                    <Button style={{marginBottom: '5%'}} variant="outlined" color="secondary"
                            onClick={this.browseClicked}>
                        Browse Beats
                    </Button>
                </Card>
            </div>
        );
    }

    browseClicked() {
        scrollToElement('#store');
    }
}

export default LicensingCard;