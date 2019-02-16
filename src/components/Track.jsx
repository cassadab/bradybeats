import Grid from "@material-ui/core/Grid/Grid";
import SoundPlayer from "./SoundPlayer";
import Button from "@material-ui/core/Button/Button";
import React from "react";

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {

    }


    render() {
        return (
            <div className={'track'}>
                <Grid container spacing={0}>
                    <Grid item xs={1}/>
                    <Grid item xs={2}>
                        <div className={'buy'}>
                            <h4>{this.props.title}</h4>
                            <div className={'buy-grid'}>
                                <Grid container spacing={0}>
                                    <Grid item xl={2} lg={2} md={2}></Grid>
                                    <Grid alignContent={"center"} item xl={4} lg={4} md={4}>
                                        <p><strong>KEY:</strong> {this.props.scale}</p>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4}>
                                        <p><strong>BPM:</strong> {this.props.bpm}</p>
                                    </Grid>
                                    <Grid item xl={2} lg={2} md={2}></Grid>


                                </Grid>


                            </div>
                            <div className={'buy-button'}>
                                        <Button variant={'outlined'} >Add to Cart</Button>
                                    </div>
                        </div>
                    </Grid>
                    <Grid item xs={8}>

                        <SoundPlayer url={this.props.url}/>
                    </Grid>
                    <Grid item xs={1}/>

                </Grid>
            </div>
        );
    }
}

export default Track;
