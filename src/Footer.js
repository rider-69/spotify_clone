import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider} from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
function Footer() {
  return (
    <div className="footer">
       
      <div className="footer__left">
      <img  className="footer__albumlogo"  src="https://pbs.twimg.com/media/E-C4qRNVcAYsadU?format=jpg&name=small" alt="" />
       <div className="footer__songinfo">
           <h4>Fair Trade</h4>
           <p>Drake</p>

       </div>
      </div>
      <div className="footer__center">
        <ShuffleRoundedIcon className="footer__green" />
        <SkipPreviousRoundedIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextRoundedIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
          <Grid container spacing = {2}>
              <Grid item>
         <PlaylistPlayIcon/>
            </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
         <Slider/>
          </Grid>
           
          </Grid>
      </div>
    </div>
  );
}

export default Footer;
