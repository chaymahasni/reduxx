  import {v4 as uuidv4} from 'uuid'
import { ADD_TASK, DELETE_TASK , EDIT_TASK,COMPLETE_TASK } from '../constants/action-types';
 const initialState = {
     tasks : [ ]
 }

 function taskReducer (state = initialState , action ) {
    const {type,payload} = action 
    switch (type) {
      case ADD_TASK : return {
        tasks : [
          ...state.tasks , {id : uuidv4() ,description :payload.description ,isDone : false}
        ]
      }

      case COMPLETE_TASK : return {
            tasks : state.tasks.map((task) =>task.id ===payload.id ? {...task , isDone : !task.isDone }: task) 
                                     } 
      case EDIT_TASK : return {
        tasks : state.tasks.map((task) =>task.id ===payload.id ? {...task ,description: payload.newDesc}: task)         }
        case DELETE_TASK : return {
                tasks : state.tasks.filter((task)=>task.id!==payload.id)
                                                }

        default  :return state ;
    }
 }

 export default taskReducer