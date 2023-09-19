import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

function DetailList(props) {
  const hashmap = new Map([
    ["exceptionType", "Exception Type :"],
    ["counterParty", "Counter Party :"],
    ["tradeId", "Trade ID :"],
    ["tradeDate", "Trade Date :"],
    ["createdBy", "Created By :"],
    ["createdAt", "Created At :"],
    ["updatedBy", "Updated By :"],
    ["updatedAt", "Updated At :"],
    ["status", "Status :"],
    ["priority", "Priority :"],
  ]);

  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {Array.from(hashmap.keys()).map((key) => (
        <ListItem key={key}>
          <Typography sx={{ mr: 1 }} variant="body1">
            {hashmap.get(key)}
          </Typography>
          {key === "status" ? (
            <ListItemText primary={<Chip label={props.data[key]} />} />
          ) : key === "priority" ? (
            <ListItemText
              primary={
                <Box sx={{ color: "error.main" }}>{props.data[key]}</Box>
              }
            />
          ) : (
            <ListItemText primary={props.data[key]} />
          )}
        </ListItem>
      ))}
    </Box>
  );
}

export default DetailList;

// import React from "react";

// import Box, { BoxProps } from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemButton from "@mui/material/ListItemButton";
// import Typography from "@mui/material/Typography";
// import Chip from '@mui/material/Chip';
// function DetailList(props) {
//     //const Attributes=['Exception Type :','Counter Party :','Trade Id :','Trade Date :','Created By:',' Created At:','Updated By:','Updated At:','Status:','Priority:']

// const hashmap = new Map([

//     ['exceptionType', 'Exception Type :'],

//     ['counterParty', 'Counter Party :'],

//     ['tradeId', 'Trade ID :'],

//     ['tradeDate', 'Trade Date :'],

//     ['createdBy', 'Created By :'],

//     ['createdAt', 'Created At :'],

//     ['updatedBy', 'Updated By :'],

//     ['updatedAt', 'Updated At :'],

//     ['status', 'Status :'],

//     ['priority', 'Priority :'],

// ])

//     return (
//         <Box
//         sx={{
//           display: "grid",
//           gap: 1,
//           gridTemplateColumns: "repeat(2, 1fr)"
//         }}
//       >

//       {hashmap.forEach((value,key)=>{

//           <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             {value}
//           </Typography>
//           {
//             if(key=="status"){
//               <ListItemText primary={<Chip label={props.data.key}/> }/>
//             }else if(key=="priority"){
//               <ListItemText primary={<Box sx={{ color: 'error.main' }}>1</Box>} />
//             }else{
//               <ListItemText primary={props.data.key} />
//             }
//           }
//         </ListItem>

//         }
//       )}
//         {/* <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Exception Type :
//           </Typography>

//           <ListItemText primary="knifni" />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Counter Party :
//           </Typography>

//           <ListItemText primary={"XYZ Bank"} />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Trade Id :
//           </Typography>

//           <ListItemText primary={"Trad123456"} />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Trade Date :
//           </Typography>

//           <ListItemText primary={"12-4-23"} />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Created By:
//           </Typography>

//           <ListItemText primary={"Parv 15-8-23"} />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Created At:
//           </Typography>

//           <ListItemText primary={"15-8-23"} />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Updated By:
//           </Typography>

//           <ListItemText primary={"ZS"} />
//         </ListItem>

//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Updated At:
//           </Typography>

//           <ListItemText primary={"20-8-23"} />
//         </ListItem>
//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Status:
//           </Typography>

//           <ListItemText primary={<Chip label="Open" />} />
//         </ListItem>
//         <ListItem>
//           <Typography
//             //sx={{ display: 'inline' }}
//             sx={{ mr: 1 }}
//             //component="span"
//             variant="body1"
//             //color="text.primary"
//           >
//             Priority:
//           </Typography>

//           <ListItemText primary={<Box sx={{ color: 'error.main' }}>1</Box>} />
//         </ListItem> */}
//       </Box>

//     );

// }
// export default DetailList;
