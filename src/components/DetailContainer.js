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
import { useEffect , useState} from "react";

import History from './History';
import ResolutionSteps from "./ResolutionSteps";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DetailList from "./DetailList";
import Buttons from "./Buttons"
import axios from "axios";


function DetailContainer(){

  const [exceptions, setExceptions] = useState([]);
  
  // var populateExceptions = () => {
  //   axios.get('http://localhost:8080/api/exception').then(
  //     (response) => {
  //       console.log(response.data);
  //       setExceptions(response.data);
  //       console.log(exceptions);
  //       console.log(exceptions[0]);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };
  const fetchAllExceptions = async () => {
    const response = await axios.get(
      'http://localhost:8080/api/exception'
    )
  
    if (response.data) {
      setExceptions(response.data);
    }
  
    return response.data;
  }

  useEffect(() => {
    fetchAllExceptions();
  }, []);




    return (

        <Container >
        <Grid container>
          <Grid item md={12}>
            <Paper elevation={3}>
              <Card>
                <CardContent>
                      {console.log(exceptions)}

                  {

                    exceptions.map((eachException)=>(
                      <div>
                      <Typography variant="h5" sx={{ p: 2 }}>
                        Exception Id: {eachException.exceptionId}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ p: 2 }}
                      >
                        Description:{eachException.description}
                        {/* {
                          "Quantity mismatch between trade records"
                        } */}
                      </Typography>
                    
                     <DetailList data={eachException} />
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
                    ))
                  }
                 

                  
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    
    );
}

export default DetailContainer;