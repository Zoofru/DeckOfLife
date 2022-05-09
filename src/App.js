import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage';
import './App.css';
import Login from './pages/login'

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
