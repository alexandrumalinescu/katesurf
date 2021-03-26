import React, {useState} from "react";
import axios from 'axios';

const Register = (props) => {

    const [data, setData]= useState({
        email: '',
        userId: '',
        password: ''
    });

    const [error,setError] = useState(null)

    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id]=e.target.value;
        setData(newData)
    }

    const submit = (e)=>{
        e.preventDefault();
        if(data.email==='' || data.userId==='' || data.password===''){
            setError('Input fields can not be empty')
        }else{
            setError(null)
            axios.post('https://605a159ab11aba001745d85c.mockapi.io/login',{
                email: data.email,
                userId: data.userId,
                password: data.password
            }).then(res=>console.log(res.data))
            .catch(error=>console.log(error));
            props.history.push('/dashboard')
        }
    }

  return (
    <div className="register">
      <form onSubmit={e=>{submit(e)}}>
          <div>Email</div>
          <input 
          id='email'
          value={data.email}
          type='email' 
          placeholder='Enter your email'
          onChange={e=>handle(e)}/>
          <div>User</div>
          <input
          id='userId'
          value={data.userId}
          type='text'
          placeholder='Enter your username'
          onChange={e=>handle(e)} />
          <div>Password</div>
          <input
          id='password'
          value={data.password}
          type='password'
          placeholder='Enter your password'
          onChange={e=>handle(e)}/><br></br><br/>
          {error && <div className='error'>{error}</div>}
          <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
