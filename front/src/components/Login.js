import React,{useState, useEffect} from "react";
import FormLogin from "./FormLogin.js";
import Profile from "./Profile.js";

const Login = () => {

  const [user, setUser] = useState(null);

      const onLogout=()=>{
      fetch("/logout")
      .then(()=> setUser(null));
    };

  useEffect(()=>{
    fetch("/getUser")
    .then(res => res.json())
    .then(user => setUser(user));
  },[]);

    return (
      <div>
      {!user ? <FormLogin></FormLogin>: <div>
        <Profile username={user.username} _id={user._id} password={user.password} ></Profile>
        <div>
          <button onClick={onLogout} className="btn btn-primary">Logout</button>
        </div>
        </div>}
      </div>
      );
};

export default Login;
