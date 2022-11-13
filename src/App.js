import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const[user,setUser] = useState({})
const googleprovider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

 const handleSignInGoogle = ()=>{
  signInWithPopup(auth, googleprovider)
  .then(result =>{
    const user = result.user;
    setUser(user)
  })
  .catch(error =>{
    console.log(error, 'error')
  })
  
}
const handleWithGithub = ()=>{
  signInWithPopup(auth, githubProvider)
  .then(result =>{
    const user = result.user;
    console.log(user)
  })
  .catch(error =>{
    console.log(error, 'error')
  })
}
const handleSignOut = () =>{
signOut(auth)
.then( ()=>{
  setUser({})
})
.catch(error=>{
  setUser({})
})

} 

  
  return (
    <div className="App">
      {
      user.email ?
      <button onClick={handleSignOut}>SignOut</button>
       :
        <div>
       <button onClick={handleSignInGoogle}>SignInWithGoogle</button>
       <button onClick={handleWithGithub}>Github SignUp</button>

        </div>
      }
      
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      
    </div>
  );
}

export default App;
