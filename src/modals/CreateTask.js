import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, MenuItem } from '@mui/material';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Work');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "category") {
            setCategory(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        taskObj["Category"] = category;
        taskObj["Completed"]=false;
        save(taskObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        label="Task Name"
                        variant="outlined"
                        fullWidth
                        value={taskName}
                        onChange={handleChange}
                        name="taskName"
                        margin="dense"
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={handleChange}
                        name="description"
                        margin="dense"
                    />
                    <TextField
                        select
                        label="Category"
                        variant="outlined"
                        fullWidth
                        value={category}
                        onChange={handleChange}
                        name="category"
                        margin="dense"
                    >
                        <MenuItem value="Work">Work</MenuItem>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Shopping">Shopping</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
