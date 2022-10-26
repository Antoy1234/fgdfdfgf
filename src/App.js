import './components/details.css';
import Todoboard from './components/todoboard'


function App() {

  const listitems = [
    {
      id: 1,
      todo: "do science homework",
    },
    {
      id: 2,
      todo: "clean the dishes",
    },
  ];

  return (
    <div>
      <div className="card">
        <h2 className="header">Antoy's Todo List</h2>
      </div>
      <Todoboard items = {listitems}></Todoboard>
    </div>
  );
}

export default App;

