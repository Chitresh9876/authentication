import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboad from './components/Dashboad';

function App() {
  
  return (
    <div className="app">
     <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/dashboard' element={<Dashboad/>}/>
     </Routes>
    </div>
  );
}

export default App;
