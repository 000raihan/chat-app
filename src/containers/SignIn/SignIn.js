import React,{useState} from 'react'
import Card from '../../components/Ui/Card/Card';
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)


    const logIn = (e)=>{
      e.preventDefault();

      dispatch(actions.signIn({email,password}));

    }

    if(auth.authenticated){
      return <Redirect to={'/'} />;
    }
    
    return (
        <div className="loginContainer">
        <Card>
          <form onSubmit={(e)=>logIn(e)}>
            <input 
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <div>
              <button type="submit">Sign In</button>
            </div>

          </form>

        </Card>
      </div>
    )
}

export default SignIn
