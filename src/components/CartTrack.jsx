import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

class CartTrack extends React.Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;

        this.state = {
            value: 'female'
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

    

    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                        <h4>March - C# - 129BPM</h4>
                        <div className={"cart-radio-wrapper"}>
                        <FormControl component="fieldset" className={"cart-radio"}>
                            <FormLabel component="legend" className={"cart-radio"}>Leasing Option:</FormLabel>
                            <RadioGroup
                                aria-label="Leasing Option"
                                name="gender1"
                                className={"cart-radio-group"}
                                value={this.state.value}
                                color={"secondary"}
                                onChange={this.handleChange}>
                                <FormControlLabel value="standard" classes={{label:"cart-radio"}} control={<Radio className={"cart-radio"}/>} label="Standard" color={'black'} />
                                <FormControlLabel value="premium" classes={{label:"cart-radio"}} control={<Radio className={"cart-radio"}/>} label="Premium" />
                                <FormControlLabel value="exclusive" classes={{label:"cart-radio"}} control={<Radio className={"cart-radio"}/>} label="Exclusive" />
                            </RadioGroup>
                        </FormControl>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>15.00</Grid>
                </Grid>
            </div>
        );
    }
}

export default CartTrack;
