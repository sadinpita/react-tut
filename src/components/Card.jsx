import React from 'react';
import reactimg from '../reactimg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const useStyles = makeStyles({
     avatar: {
          margin: 10,
     },
     orangeAvatar: {
          margin: 10,
          color: '#fff',
          backgroundColor: deepOrange[500],
     },
     purpleAvatar: {
          margin: 10,
          color: '#fff',
          backgroundColor: deepPurple[500],
     },
     root: {
          flexGrow: 1,
     },
});

let name = "Sadin Pita";
let username = "@sadin.pita";
let date = "Sep 10";
let title = "Learning React? Start Small.";
let subtitle = "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.";

export default function Card () {
     const classes = useStyles();

     return (
          <div class="card-wrapper">
               <Grid container spacing={3}>
                    <Grid item xs={2}>
                              <Avatar className={classes.avatar}>S</Avatar>
                    </Grid>
                    <Grid item xs={10}>
                         
                         <div class="card-info">
                              <div class="card-name">{name}</div>
                              <div class="card-light-text"><a href="" class="card-user-link">{username}</a> · {date}</div>
                         </div>

                         <div class="card-bottom-wrapper">
                              <div class="card-title">{title}</div>
                              <img src={reactimg} class="card-img" alt="" />
                              <div class="card-bottom">
                                   <div class="link-title">{title}</div>
                                   <div class="link-subtitle">{subtitle}</div>
                              </div>

                              <div class="card-icons">
                                   <div><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></div>
                                   <div class="card-icons-single"><ShareRoundedIcon></ShareRoundedIcon></div>
                                   <div class="card-icons-single"><FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon></div>
                              </div>
                         </div>
                    </Grid>
               </Grid>
          </div>
     );
}