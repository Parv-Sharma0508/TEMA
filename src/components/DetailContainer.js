import React from "react";

import AppBar from "@mui/material/AppBar";
import Box, { BoxProps } from "@mui/material/Box";

import Card from "@mui/material/Card";
//import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
//import CardHeader from '@mui/material/CardHeader';
//import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Link from '@mui/material/Link';
//import GlobalStyles from '@mui/material/GlobalStyles';
import Container from "@mui/material/Container";
//import { AccountCircle } from '@mui/icons-material';

import History from './History';
import ResolutionSteps from "./ResolutionSteps";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DetailList from "./DetailList";
import Buttons from "./Buttons"


function DetailContainer(){
    return (

        <Container >
        <Grid container>
          <Grid item md={12}>
            <Paper elevation={3}>
              <Card>
                <CardContent>
                  <div>
                    <Typography variant="h5" sx={{ p: 2 }}>
                      Exception Id: {"#Exp1234"}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ p: 2 }}
                    >
                      Description:{" "}
                      {
                        "Quantity mismatch between trade records"
                      }
                    </Typography>
                  
                   <DetailList/>
                   <Grid container s sx={{ ml: 2 }}>
                       <Grid item xs={4}>
                       <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Resolution Steps:
          </Typography>
                      </Grid>
                      <Grid item xs={8}>
                      <ResolutionSteps/>
                    </Grid>
 
                    </Grid>

                   <History/>

                    <Buttons/>
                   
                  </div>

                  
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>




        
    );
}

export default DetailContainer;