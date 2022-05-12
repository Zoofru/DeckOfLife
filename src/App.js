import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage';
import './App.css';
import Login from './pages/login'
import Signup from './pages/signup';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route
            exact
            path='/'
            element={
              <HomePage></HomePage>
            }
          />

          <Route
            exact
            path='/login'
            element={
              <Login></Login>
            }
          />

          <Route
            exact
            path='/signup'
            element={
              <Signup></Signup>
            }
          />

          <Route
            exact
            path='/home'
            element={
              <Home></Home>
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
