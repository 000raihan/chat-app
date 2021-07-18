import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </Layout>
  )
}

export default App
