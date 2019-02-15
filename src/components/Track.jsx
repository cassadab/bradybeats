import Grid from "@material-ui/core/Grid/Grid";
import SoundPlayer from "./SoundPlayer";
import Button from "@material-ui/core/Button/Button";
import React from "react";

class Track extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'track'}>
                <Grid container spacing={0}>
                    <Grid item xs={1}/>
                    <Grid item xs={2}>
                        <div className={'buy'}>
                            <div className={'buy-grid'}>
                                <Grid container spacing={0}>
                                    <Grid item xl={6} lg={6} md={6}>
                                        <div className={'buy-button'}>
                                            <Button variant={'outlined'}>Add to Cart</Button>
                                        </div>
                                    </Grid>
                                    <Grid item xl={5} lg={5} md={5}>
                                        <p><strong>KEY:</strong> Cm</p>
                                        <p><strong>BPM:</strong> 129</p>
                                    </Grid>
                                </Grid>
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
