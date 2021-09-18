import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import {useHistory, useLocation} from 'react-router-dom';



const Profile = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const location = useLocation();


    const logout=()=>{
        dispatch({type:'LOGOUT'})
        history.push('/');
    }

    useEffect(() => {
        const token = user?.token;
        //
        if(token){
          const decodedToken = decode(token);
    
          if(decodedToken.exp *1000 < new Date().getTime())
            logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')))
    
      }, [location]);
    

    return (
        <div>
        {user?.result ? (
            <>
            <h1>User Profile </h1>
            <button onClick={logout}>Logout</button>
            <h3>Name:{user.result.name}</h3>
            <p>Email:{user.result.email}</p>
            <p>Phone no: {user.result.phone}</p>
            </>
        ):(
            <>
            <h3>Please Login to See Your Profile</h3>
            <button onClick={()=>{history.push('/')}}>Login</button>
            </>
        )}
        </div>
    )
}

export default Profile
