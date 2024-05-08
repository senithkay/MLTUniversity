import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";

export default function SimpleCard() {
  return (
    <div className="">
      <div className=" w-[100%]  h-[100%]">
        <Card sx={{ maxWidth: 345, height: 250, width: 300, backgroundColor:'blue' }}>
          <CardActionArea >
            <CardContent sx={{marginLeft:'10px'}}>
              <Typography gutterBottom variant="h5" component="div" sx={{color:'white',paddingTop:'35px'}}>
              International Clubs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color:'white',fontSize:16}}>
              MLT is committed to bringing in the best of the world educational experience to encourage global exposure among students 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}