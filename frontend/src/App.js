
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurant from './components/restaurant/Restaurant';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter >
    <Navbar />
        <Routes>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/restaurant' element={<Restaurant/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;