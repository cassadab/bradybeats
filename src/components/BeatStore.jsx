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

function BeatStore(props) {
    const {classes} = props;
    return (
        <div id={"store"}>
            <h1>Beat Store</h1>
            <div className={"track-wrapper"}>
                <Track title={"After Dark"} scale={"Cm"} bpm={"129"} 
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572026407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                    download={""}/>
                <Track title={"Ice"} scale={"D#m"} bpm={"140"} 
                    url={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570945447&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                    download={""}/>
                <Track title={"Marked"} scale={"Cm"} bpm={"130"} 
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572034045&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'} 
                    download={"https://s3.amazonaws.com/brady-beats/march.wav"}/>
                <Track title={"Coroner"} scale={"D#"} bpm={"125"}
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572028822&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                    download={''}/>
                <Track title={"Sunshine"} scale={"F#"} bpm={"88"}
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572029338&color=%2300beff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                    download={''}/>
            </div>
        </div>
    )
}

export default BeatStore;