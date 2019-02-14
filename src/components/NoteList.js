import React from 'react';
import {
    ListItem,
    Grid,
    List,
    Button,
    Paper,
    Typography
} from "@material-ui/core";
import '../containers/App.css';
import "typeface-pacifico";

const NoteList = ({noteTitles, createNote, clickTitle}) => {
    const noteComponent = noteTitles.map((user, i) => {
        return (
            
            <ListItem
                button
             key={i} 
             id={i}
              onClick={clickTitle} 
              divider
            >
            
                <Typography>{noteTitles[i]}</Typography>
            </ListItem>
          
        )
    })
    return (
    <Paper> 
        <Grid alignItems="stretch" container>
            <Grid item xs={12} style={{ textAlign:"center" }} >
                
                <List component="nav" justify="center"  style={{ width:'inherit', backgroundColor:'#424242' }}>
                    {noteComponent}
                    <ListItem>
                        <Button 
                            fullWidth
                            variant="raised" 
                            color="primary" 
                            style={{ textTransform: "none"}}
                            onClick={createNote}
                        >
                            + create new note
                        </Button>
                    </ListItem>
                </List>
                
            </Grid>
        </Grid>
        </Paper>
    );
}
export default NoteList;