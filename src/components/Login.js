import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  
  const [error, setEror]=useState(null);
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });

  const handle = (e) => {
    const newLoginData = { ...loginData };
    newLoginData[e.target.id] = e.target.value;
    setLoginData(newLoginData);
  };

  //const postlogin =`https://605a159ab11aba001745d85c.mockapi.io/login?=&userId=${userId}&password=${password}`

  const handleLogin = (e) => {
    e.preventDefault(e);
    axios.get('https://605a159ab11aba001745d85c.mockapi.io/login',)
    .then(res=>{
      const result = res.data
      const checkId=result.map((item)=>item.userId===loginData.userId);
      const verifyCheckId = checkId.every(i=>i===false);
      const checkPassword = result.map(item=>{return item.password===loginData.password})
      const verifyCheckPassword = checkPassword.every(i=>i===false)
      if(verifyCheckId===false && verifyCheckPassword === false){
        props.history.push('/dashboard')}else{
          setEror('Invalid userId or password')
        }
      })
    .catch(error=>console.log(error));
  };

  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <div>UserId</div>
        <input
          id='userId'
          value={loginData.userId}
          type="text"
          placeholder="Type your UserId"
          onChange={(e) => handle(e)}
        />
        <div>Password</div>
        <input
          id='password'
          value={loginData.password}
          typep="password"
          placeholder="Type your password"
          onChange={(e) => handle(e)}
        />
        <br />
        <div className='error'>{error}</div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
