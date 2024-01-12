import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Pages/Form';
import View from './Pages/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='viewData' element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
