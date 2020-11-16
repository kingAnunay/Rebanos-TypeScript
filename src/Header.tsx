import React from "react";
import "./Header.css";

import { AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

import { Input , Avatar } from '@material-ui/core';


export default function Header(){
  return(
    <AppBar 
      position="sticky" 
      style={{backgroundColor:"Black"}}
      >
      <Toolbar>
        <Typography
          style={{color:"Green",
          paddingRight:"10px"
          }}
        >
          Rebanos
        </Typography>
        <Input
            placeholder="Search"
            style={{color:"Black",
            backgroundColor:"White",
            borderRadius:"5px",
            padding:"3px 10px"}}
          />
        <IconButton>
          <Avatar/>
          <Menu
            style={{color:"White"}}/>
        </IconButton>    
      </Toolbar>  
    </AppBar>
  );
}