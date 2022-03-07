import React from 'react'
import { Button ,ButtonGroup} from 'react-bootstrap'
import  {useDispatch} from 'react-redux'
import { deleteTask , completeTask} from '../redux/actions/actions'
import EditTask from './EditTask'
import './TaskData.css'

const TaskData = ({taskData, index}) => {
    const dispatch = useDispatch()

    const handleDelete = () =>{ dispatch(deleteTask({   id : taskData.id } ))}

   const  handleCheck = () => { dispatch(completeTask({ id : taskData.id }))}
    

    return (
        <>

        <div className='fie' >
            <div>
            <h2> { !taskData.isDone ? `${index+1}) ${taskData.description}`: `${index+1}) ${taskData.description}`+' ✔️'}
</h2>
        </div>
        <div className='divbt'>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={handleCheck} >{ taskData.isDone ? 'Undo ': 'Done'}</Button>
            <EditTask  taskData={taskData}/>
            <Button variant="dark"  onClick={handleDelete}>Delete</Button>
           
            </ButtonGroup>
            </div>
        </div>
        </>
       
    )
}

export default TaskData
