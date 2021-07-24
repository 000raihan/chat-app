import React,{Component, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PrivateRoute = (props) => {

    // const {component, path, exact} = props;


    const localUser = localStorage.getItem('user');

    const user= localUser ? localUser : null;

    let components = null

    if(user){
      components = <Route path={props.path} exact={props.exact}  component={props.component} />
    }else{
       components = <Redirect to="/signup"/>
    }
    
    return (
        components
    )
}

export default PrivateRoute
