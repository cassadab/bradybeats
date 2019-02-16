import React from 'react';
import LazyHero from 'react-lazy-hero';
import image from './mix.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HomeCard from './HomeCard';
import grey from '@material-ui/core/colors/grey';
import SoundPlayer from "./SoundPlayer";
import Track from "./Track";
import Card from '@material-ui/core/Card';
import LicensingCard from './LicensingCard';
import { func } from 'prop-types';

const iconSize = '6x';



class Licensing extends React.Component {
    constructor(props) {
        super(props);
        this.standardTerms = this.standardTerms.bind(this);
        this.premiumTerms = this.premiumTerms.bind(this);
        this.exclusiveTerms = this.exclusiveTerms.bind(this);
    }

    standardTerms() {
        return(
            <div>
                <ul>
                    <li>Mixed MP3</li>
                    <li>Sell 10,000 Copies</li>
                    <li>30,000 Audio Streams</li>
                    <li>100% Royalty Free</li>
                    <li>Permanent</li>
                    <li>Beat Can Still Be Sold/Licensed</li>
                </ul>
            </div>
        );
    }

    premiumTerms() {
        return(
            <div>
                <ul>
                    <li>Mixed MP3 & WAV</li>
                    <li>Sell 50,000 Copies</li>
                    <li>100,000 Audio Streams</li>
                    <li>100% Royalty Free</li>
                    <li>Permanent</li>
                    <li>Beat Can Still Be Sold/Licensed</li>
                </ul>
            </div>
        );
    }
    
    exclusiveTerms() {
        return(
            <div>
                <ul>
                    <li>Mixed MP3 & WAV</li>
                    <li>Tracked Out Stems</li>
                    <li>Unlimited Sales and Audio Streams</li>
                    <li>100% Royalty Free</li>
                    <li>Permanent</li>
                    <li>Beat Will No Longer Be Sold</li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div id={"licensing"}>
            <h1>Licensing</h1>
            <Grid className={"center"} container spacing={16} justify={"center"}>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                    <LicensingCard title={"Standard Lease"} price={15} termsList={this.standardTerms()}/>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                    <LicensingCard title={"Premium Lease"} price={25} termsList={this.premiumTerms()}/>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                    <LicensingCard title={"Exclusive"} price={50} termsList={this.exclusiveTerms()}/>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default Licensing;