import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  color: {
      backgroundColor: '#0f0d11'
  },
});

// uses the material-ui hook api. material-ui offers 3 different api's to generate and apply styles, but we'll just focus on the makeStyles hook api for todays example.

// we declare a useStyles object and set it equal to makeStyles that we imported from material-ui.

// we then declare a variable of classes within our component and set it equal to the styles we've created.

// to apply our styles, we give our jsx elements the className attribute and using interpolation, call our classes variable. We then use . notation to dig into our object and select the key with the styles we'd like to display.

const Navbar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar className={classes.color}>
                <Typography variant="h6" className={classes.title} id='navTitle'>Record Revolution</Typography>
                <Button type='button' color='inherit'>Login</Button>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;