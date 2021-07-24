import * as actions from '../actions/actionTypes';

const initialState  = {
    loading: false,
    user: null,
    authenticated : false,
    error: null,
    logOut: false
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case actions.AUTH_STARTED : 
            return {
                ...state,
                loading: true
            }
        break;
        case actions.SIGNUP_SUCCESS : 
            return {
                ...state,
                user:action.userData,
                authenticated: true,
                loading:false
            }
            break;
        case actions.SIGNUP_FAILED : 
            return {
                ...state,
                error: action.err,
                authenticated: false,
                loading: false
            }
            break;
        case actions.SIGNIN_SUCCESS : 
            return{
                ...state,
                authenticated: true,
                user: action.userData,
                loading:false
            }
            break;
        case actions.SIGNIN_FAILED : 
            return{
                ...state,
                err: action.err,
                loading:false
            }
        
        case actions.AUTO_AUTH_SET : 
        return{
            ...state,
            user: action.userData,
            authenticated:true
        }
            break;
        case actions.AUTH_LOGOUT_SUCCESS :
            return{
                ...state,
                loading: false,
                user: null,
                authenticated : false,
                error: null
            }
            break;
        case actions.AUTH_LOGOUT_FAILED : 
            return {
                ...state
            }
        default:
            return state;
    }
}

export default authReducer;