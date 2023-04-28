
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home';

import Service from './routes/Service';
import Contact from './routes/Contact';

import Details from './routes/Details';




function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details' element={<Details/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </div>
  );
}

export default App;
