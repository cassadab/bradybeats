import React from 'react';
import LazyHero from 'react-lazy-hero';
import image from './mix.jpg';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faFileContract} from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import HomeCard from './HomeCard';
import grey from '@material-ui/core/colors/grey';
import SoundPlayer from "./SoundPlayer";
import Track from "./Track";


const heroStyle = {
    marginBottom: '5%'
};

const circleIcon = {
    //color: grey,
};

const center = {
    textAlign: 'center'
};
const iconSize = '6x';

function Home(props) {
    const {classes} = props;
    return (
        <div className={"store"}>
            <h1>Beat Store</h1>
            <div className={"track-wrapper"}>
                <Track url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572034045&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}/>
                <Track url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572026407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}/>
            </div>
        </div>
    )
}

export default Home;