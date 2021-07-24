import React,{useEffect} from 'react';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions/index';


const App = () => {

 const dispatch = useDispatch();

  useEffect(()=>{
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if(user){
      console.log(user)
      dispatch(actions.autoAuthSet(user))
    }

  },[])

  return (
    <Layout>
      <Switch>
        {/* private routes */}

        <PrivateRoute path="/" exact component={Home}/>

        {/* public routes */}
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </Layout>
  )
}

export default App
