import TaskAdd from "./Taskadd";
import TaskList from "./TaskList";
import "./scss/App.scss"
import "./scss/Responsive.scss"
function App() {
  return (
    <div className="todo-app">
        <div className="grid wide row wrap">
          {TaskAdd()}
          {TaskList()}
        </div>     
      </div>
  );
}

export default App;
