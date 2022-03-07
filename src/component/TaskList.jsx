import React from 'react'
import { useSelector } from 'react-redux'
import TaskData from './TaskData'
const TaskList = () => {

const tasks = useSelector(state => state.taskReducer.tasks)

    return (
        <div>
            {
                tasks.map((taskData,index) => <TaskData  taskData={taskData} key={index } index={index}/>)
            }
        </div>
    )
}

export default TaskList
