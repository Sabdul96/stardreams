import React, { useState } from "react"; 


const Tasks = () => { 
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState(" ");

    const handleAddTasks = () => { 
        if(newTasks.trim() !== "") { 
            setNewTasks([...tasks, { text:newTasks.trim(), checked:false}]);
            setNewTasks(" ");
        }
    };
}