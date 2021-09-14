import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './fireBase';
import { useDispatch } from 'react-redux';


function App() {

const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if (userAuth){
      //loged in
      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
      );
    } else{
      //logged out
      dispatch(logout())
    }
  })
}, [])


  return (
    <div className="app">
        {/*Header*/}
        <Header />

      {!user ? <Login /> 
      : (
      <div className="app__body">
      <Sidebar />
      <Feed />
      </div>
      )}
    </div>
  );
}

export default App;
