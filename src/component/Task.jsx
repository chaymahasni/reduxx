import React , {useState} from 'react'
import './Task.css'
import { useDispatch } from 'react-redux';
import { Button , Navbar , Container } from 'react-bootstrap';
import { addTask } from '../redux/actions/actions';


const Task = () => {
    const   [newTask,setNewTask] = useState('')
    const handleChange =(e) => {
        setNewTask(e.target.value)
    }

    const handleSubmit =(e) =>{
            dispatch(addTask(
                {
                    description : newTask
                }
            ))
            setNewTask('') 

        }
    const dispatch = useDispatch()
    return (
        <>
        <Navbar>
  <Container>
    <Navbar.Brand href="#home">Todo Task App</Navbar.Brand>
  </Container>
</Navbar>
        <div className='input'>
            <input type='text'  required value={newTask} placeholder='type a new task' onChange={handleChange} />
            <Button variant="secondary" onClick={handleSubmit} style={{marginRight : '20px'}}>ADD TASK</Button>
          
        </div>
        </>
    )
}

export default Task ;