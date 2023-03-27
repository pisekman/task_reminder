import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@mui/material';

function Todo() {
     const [items, setItems] = useState([]);
     const [text, setText] = useState('');

     const handleChange = event => {
          setText(event.target.value);
     };

     const handleSubmit = event => {
          event.preventDefault();
          if (!text.trim()) {
               return;
          }
          setItems([...items, text]);
          setText('');
     };

     const handleDelete = index => {
          setItems(items.filter((_, i) => i !== index));
     };

     return (
          <>
               <form onSubmit={handleSubmit}>
                    <TextField
                         label="New Todo"
                         value={text}
                         onChange={handleChange}
                         margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                         Add
                    </Button>
               </form>
               <List>
                    {items.map((item, index) => (
                         <ListItem key={index}>
                              <ListItemText primary={item} />
                              <ListItemSecondaryAction>
                                   <IconButton onClick={() => handleDelete(index)}>
                                        <DeleteIcon />
                                   </IconButton>
                              </ListItemSecondaryAction>
                         </ListItem>
                    ))}
               </List>
          </>
     );
}

export default Todo;
