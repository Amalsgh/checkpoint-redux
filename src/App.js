
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';

function App() {
  return (
    <div className="App">
<h1>To do list</h1>
<br />
<AddTask/>
<br />
<ListTask/>
    </div>
  );
}

export default App;
