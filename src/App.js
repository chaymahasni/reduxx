import Task from './component/Task';
import './App.css'
import TaskList from './component/TaskList';
import EditTask from './component/EditTask';




function App() {
  return (
    <div className="App">
    <Task />
    <TaskList/>
    </div>
  );
}

export default App;
