import React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
function DetailList() {

    return (
        <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)"
        }}
      >
        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Exception Type :
          </Typography>

          <ListItemText primary="knifni" />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Counter Party :
          </Typography>

          <ListItemText primary={"XYZ Bank"} />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Trade Id :
          </Typography>

          <ListItemText primary={"Trad123456"} />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Trade Date :
          </Typography>

          <ListItemText primary={"12-4-23"} />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Created By:
          </Typography>

          <ListItemText primary={"Parv 15-8-23"} />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Created At:
          </Typography>

          <ListItemText primary={"15-8-23"} />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Updated By:
          </Typography>

          <ListItemText primary={"ZS"} />
        </ListItem>

        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Updated At:
          </Typography>

          <ListItemText primary={"20-8-23"} />
        </ListItem>
        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Status:
          </Typography>

          <ListItemText primary={<Chip label="Open" />} />
        </ListItem>
        <ListItem>
          <Typography
            //sx={{ display: 'inline' }}
            sx={{ mr: 1 }}
            //component="span"
            variant="body1"
            //color="text.primary"
          >
            Priority:
          </Typography>

          <ListItemText primary={<Box sx={{ color: 'error.main' }}>1</Box>} />
        </ListItem>
      </Box>




    );
    
}
export default DetailList;