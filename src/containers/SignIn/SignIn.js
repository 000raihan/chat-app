import React,{useState} from 'react'
import Card from '../../components/Ui/Card/Card';
import './style.css';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="loginContainer">
        <Card>
          <form>
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
              <button>Sign In</button>
            </div>

          </form>

        </Card>
      </div>
    )
}

export default SignIn
