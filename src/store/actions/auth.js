// import {auth, firestore} from 'firebase/app';
import firebase from 'firebase';
import * as actionType from './actionTypes';

export const authStarted = ()=>{
    return{
        type: actionType.AUTH_STARTED
    }
}

export const signUPSuccess = (user)=>{
    return{
        type: actionType.SIGNUP_SUCCESS,
        userData : user
    }
}

export const signUpFailed = (err)=>{
    return{
        type: actionType.SIGNUP_FAILED,
        err: err
    }
}


export const signUp = (user)=>{
    return async (dispatch) => {
        const db = firebase.firestore();

        dispatch(authStarted())

        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res1 => {
            console.log(res1.user);

            const currentUser = firebase.auth().currentUser;
            const name = `${user.firstName} ${user.lastName}`
            currentUser.updateProfile({
                displayName: name
            })
            .then(res2=>{
                db.collection('user').add({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    date: new Date(),
                    id: res1.user.uid
                })
                .then(res3=>{
                    //sucessfull
                    const loggedUser = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        id: res1.user.uid,
                        email: user.email
                    }
                    dispatch(signUPSuccess(loggedUser));
                    localStorage.setItem('user', JSON.stringify(loggedUser));
                    console.log('User Logged in');
                })
                .catch(err=>{
                    console.log(err);
                    dispatch(signUpFailed(err));
                });
            })
            .catch(err=>{
                console.log(err);
                dispatch(signUpFailed(err));
            })
        })
        .catch(err=>{
            console.log(err);
            dispatch(signUpFailed(err));
        })
    }
}



// ----------------------------------------------------------------------------


export const signInSuccess = (user)=>{
    return{
        type: actionType.SIGNIN_SUCCESS,
        userData: user
    }
}

export const signInfailed = (err)=>{
    return{
        type: actionType.SIGNIN_FAILED,
        err: err
    }
}

export const signIn= (user)=>{
    return async (dispatch) =>{
        dispatch(authStarted());

        // console.log(user)

        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(res1=>{
                const name = res1.user.displayName.split(" ");
                const firstName = name[0];
                const lastName = name[2];

                // console.log('last name is : '+ name)

                const loggedUser = {
                    firstName : firstName,
                    lastName: lastName,
                    uid : res1.user.uid,
                    email: user.email
                }

                localStorage.setItem('user', JSON.stringify(loggedUser));

                dispatch(signInSuccess(loggedUser));
            })
            .catch(err=>{
                console.log(err)
                dispatch(signInfailed(err))
            })
    }
}


export const autoAuthSet = (user)=>{
    // console.log('im called')
    return {
        type: actionType.AUTO_AUTH_SET,
        userData : user
    }
}


// export const autoAuth = () => {
//     console.log('im called from top')
//     return dispatch => {
//         console.log('im called from bottom')
        
//         console.log('user is : '+ user);


//     }
// }


export const logOut = ()=>{
    return async dispatch=>{
        // console.log('logout called')
        dispatch(authStarted());

        firebase.auth()
            .signOut()
            .then(()=>{
                localStorage.clear();
                dispatch({type:actionType.AUTH_LOGOUT_SUCCESS});

            })
            .catch(()=>{
                dispatch({type: actionType.AUTH_LOGOUT_FAILED})
            })
    }
}