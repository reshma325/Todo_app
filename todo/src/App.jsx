
import { Route } from 'react-router-dom';
import './App.css';
import { Routes } from 'react-router-dom';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
