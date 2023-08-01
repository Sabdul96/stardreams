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

    const handleDeleteTasks = (index) => { 
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleToggleTasks = (index) => { 
        const newTasks =[...tasks];
        newTasks[index].checked = !newTasks[index].checked;
        setNewTasks(newTasks);
    };

return ( 
    <div> 
        <h1> 
        New Tasks
        </h1>
        <input 
        type= "text" 
        value={newTasks}
        onChange={(e) => setNewTasks(e.target.value)}/>
    </div>
)

};
export default Tasks;