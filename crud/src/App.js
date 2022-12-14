import './App.css';
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="main">
    <h1>Contacts</h1>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Create/>} />
        <Route exact path="/read" element={<Read/>} />
        <Route exact path="/edit" element={<Update/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
