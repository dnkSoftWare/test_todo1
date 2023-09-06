import './App.css';
import './ToDoComponent/ToDoHeader'
import {ToDoList} from "./ToDoComponent/ToDoList";

function App() {

  return (
    <div className="App">
      <header className="App-header">
            <ToDoList/>
      </header>
    </div>
  );
}

export default App;
