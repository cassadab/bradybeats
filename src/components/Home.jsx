import React from 'react';
import LazyHero from 'react-lazy-hero';
import image from './mix.jpg';
import Grid from '@material-ui/core/Grid';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faFileContract} from '@fortawesome/free-solid-svg-icons';
import HomeCard from './HomeCard';


const heroStyle = {
    marginBottom: '5%'
};
const center = {
    textAlign: 'center'
};
const iconSize = '6x';

function Home(props) {
    return (
        <div>
            <LazyHero imageSrc={image} opacity={0.5} color="black" style={heroStyle}>
                <h1 className={"white"}>BradyBeats</h1>
            </LazyHero>
            <div style={center} className={'menu'}>
                <Grid container spacing={0}>
                    <Grid item xs={2}/>
                    <Grid item xs={4} className={"sector"}>
                        <HomeCard icon={faShoppingCart} size={iconSize} title={'Beat Store'} btnText={'Browse'} btnLink={'#store'}/>
                    </Grid>
                    <Grid item xs={4} className={"sector"}>
                        <HomeCard icon={faFileContract} size={iconSize} title={'Licensing Options'} btnText={'Browse'} btnLink={'#licensing'}/>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            </div>
        </div>
    )
}

export default Home;