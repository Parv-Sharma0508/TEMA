import React from "react";
import DetailContainer from "./components/DetailContainer";
import NavBar from "./components/NavBar/NavBar"


const App = () => {
  return (
    <div>
      {/* <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <NavBar/>
      <DetailContainer/>
     
    </div>
  );
};

export default App;



// {/* <List>
//                     <ListItem>
//                       <ListItemText primary="Status:" />
//                       <ListItemIcon>
//                         <span className="label label-primary">Active</span>
//                       </ListItemIcon>
//                     </ListItem>
//                   </List> */}
//                   {/* ... More content */}