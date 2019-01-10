import React from 'react';
import LazyHero from 'react-lazy-hero';
import image from './mix.jpg';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faFileContract} from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';


const heroStyle = {
    marginBottom: '5%'
};

const circleIcon = {
    //color: grey,
};

const center = {
    textAlign: 'center'
};

function Home(props) {
    const {classes} = props;
    return (
        <div>
            <LazyHero imageSrc={image} opacity={0.5} color="black" style={heroStyle}>
                <h1 className={"white"}>BradyBeats</h1>
            </LazyHero>
            <div style={center}>
                <Grid container spacing={0}>
                    <Grid item xs={2}/>
                    <Grid item xs={4} className={"sector"}>
                        <FontAwesomeIcon icon={faShoppingCart} size={"6x"} style={circleIcon}/>
                        <h1>Beat Store</h1>
                        <Button variant={"outlined"}>Browse</Button>
                    </Grid>
                    <Grid item xs={4} className={"sector"}>
                        <FontAwesomeIcon icon={faFileContract} size={"6x"} style={circleIcon}/>
                        <h1>Licensing Options</h1>
                        <Button variant={"outlined"}>Browse</Button>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>

            </div>
        </div>
    )
}

export default Home;