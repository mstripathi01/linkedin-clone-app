import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import './App.css';
import {login, logout, selectUser} from "./features/userSlice";
import Header from './Header';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        // user logged in
        dispatch(login({
          email : userAuth.email,
          password : userAuth.password,
          displayName : userAuth.displayName,
          profileUrl : userAuth.photoURL,
      }))
      }
      else{
        // user is logout
        dispatch(logout());
      }
    });
  },[])
  return (
    <div className="App">
      
     <Header />

     {!user ? (
       <Login />
     ): (
     <div className = "app__body">
      <Sidebar />
     <Feed />
    <Widgets />
     </div>
     )}
      </div>
  );
}


export default App;
