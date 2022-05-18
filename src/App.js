import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from './context/usercontext';
import { useEffect, useState } from 'react';
import axios from 'axios'
import HomePage from './pages/homepage';
import './App.scss';
import Login from './pages/login'
import Signup from './pages/signup';
import HomeCenterDisplay from './userhomepage/middle/homecenterdisplay';

function App() {
  const [user, setUser] = useState(null)
    
  useEffect(() => {
    //If user refreshes page, make a call to set user context again
    const refreshUser = async () => {
      if(localStorage.getItem('UAT')) {
        const res = await axios.get(`${process.env.REACT_APP_API}/retrieve`, {
          headers: {
            'Authorization' : `${localStorage.getItem('UAT')}`
          }
        })
        setUser(res.data.user)
      }
    }

    
    if(localStorage.getItem('CUSER')) {
      setUser(localStorage.getItem('CUSER'))
    } else {
      refreshUser()
    }    
  }, [])

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path='/'
              element={
                !user ? <HomePage></HomePage> : <HomeCenterDisplay></HomeCenterDisplay>
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
                <HomeCenterDisplay></HomeCenterDisplay>
              }
            />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
