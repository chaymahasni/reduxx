import React , {useState}from 'react'
import { Modal , Button ,FormControl} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/actions';

const EditTask = ({taskData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newDesc,setNewDesc] = useState('')
  const dispatch =useDispatch()
  const handleSubmit =()=>{
    dispatch(editTask({
      id : taskData.id,
      newDesc : newDesc
    }))
    handleClose()
  }

  const handleChange =(e ) => {
    setNewDesc(e.target.value)
  }
    return (  
<>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <FormControl type="text"
            placeholder="type new task"
             className="input-add" 
             defaultValue={taskData.description}
             onChange={handleChange}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default EditTask
