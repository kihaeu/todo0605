import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Card as MUICard, CardContent, CardActions, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

const colors = {
    Work: {
        primaryColor: "#5D93E1",
        secondaryColor: "#ECF3FC"
    },
    Personal: {
        primaryColor: "#F9D288",
        secondaryColor: "#FEFAF1"
    },
    Shopping: {
        primaryColor: "#5DC250",
        secondaryColor: "#F2FAF1"
    },
    Other: {
        primaryColor: "#B964F7",
        secondaryColor: "#F3F0FD"
    }
};

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [completed, setCompleted] = useState(taskObj.Completed || false);

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = () => {
        const updatedTask = { ...taskObj, Completed: !completed };
        setCompleted(!completed);
        updateListArray(updatedTask, index);
    };

    const categoryColor = colors[taskObj.Category] || colors.Other;

    return (
        <MUICard style={{ borderLeft: `5px solid ${categoryColor.primaryColor}` }}>
            <CardContent style={{ backgroundColor: categoryColor.secondaryColor }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={completed}
                            onChange={handleCheckboxChange}
                            color="primary"
                        />
                    }
                    label={
                        <Typography variant="h5" component="div" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                            {taskObj.Name}
                        </Typography>
                    }
                />
                <Typography variant="body2" color="textSecondary" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {taskObj.Description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setModal(true)}>Edit</Button>
                <Button size="small" color="secondary" onClick={handleDelete}>Delete</Button>
            </CardActions>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </MUICard>
    );
};

export default Card;
