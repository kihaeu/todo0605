import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
    const [modals, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modals);
    };

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    return (
        <>
            <Box className="header" textAlign="center" py={4}>
                <Typography variant="h3">Todo List</Typography>
                <Button variant="contained" color="primary" onClick={() => setModal(true)}>Create Task</Button>
            </Box>
            <Grid container spacing={2} className="task-container">
                {taskList && taskList.map((obj, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
                    </Grid>
                ))}
            </Grid>
            <CreateTask toggle={toggle} modal={modals} save={saveTask} />
        </>
    );
};

export default TodoList;
