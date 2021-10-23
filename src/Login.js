import React,{useState} from 'react'
import { auth } from './firebase'
import './Login.css'
import {useDispatch} from "react-redux"
import { login } from './features/userSlice'

const Login = () => {
   const [name,setName] = useState('')
   const [email,setEmail] =  useState('')
   const [password,SetPassword] = useState('')
   const [profilePic,setProfilePic] = useState('')
   const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()
         auth.signInWithEmailAndPassword(email,password).then(userAuth => {
             dispatch(login({
                 email : userAuth.user.email,
                 password : userAuth.user.password,
                 displayName : userAuth.user.displayName,
                 profileUrl : userAuth.user.photoURL,
             }))
         }).catch(error => alert(error))
    }

    const register = () => {
        if(!name){
            return alert("Enter Your Name");
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
                 userAuth.user.updateProfile({
                     displayName : name,
                     photoURL : profilePic,
                    
                 })
        .then(()=> {
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : name,
                photoUrl : profilePic
            })
            );
        });
        }).catch(error => alert(error ))
    } 
    return (
        <div className = 'login'>
           <img src = "./image/linkedin.png " alt = ""/>
           <form>
              <input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)} placeholder = "Fullname required if registering" />
              <input type = "text" value = {profilePic} onChange = {(e)=>setProfilePic(e.target.value)}  placeholder = "Profile Url (optional)" />
              <input type = "email"  onChange = {(e)=>setEmail(e.target.value)} value = {email} placeholder = "Email" />
              <input type = "password" onChange = {(e)=>SetPassword(e.target.value)} value = {password} placeholder = "Password" />
              <button type="submit" onClick = {loginToApp}>Sign In</button>
           </form>
           <p>Not a member?{" "}
           <span className = "login__register" onClick = {register}>Register Now</span></p>
        </div>
    )
}

export default Login