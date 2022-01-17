import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyles from "./styles";

import logo from "../../assets/noun-paw-35770.png"

const NavBar = () => {
    const classes = useStyles();
    return (
        <>
  <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
  <Typography variant="h6" className={classes.title} color="inherit">
<img src={logo} alt="E-commerce.js" height="25px" className={classes.image}/>
Doggystyles

  </Typography>
  <div className={classes.grow}/>
  <div className= {classes.button} >
    <IconButton aria-label="show cart items" color="inherit">
    <Badge badgeContent={2} color="secondary"></Badge>
    <ShoppingCart/>


    </IconButton>

  </div>


      </Toolbar>


  </AppBar>


        </>
    )
}

export default NavBar
