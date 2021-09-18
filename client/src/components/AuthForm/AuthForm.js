import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import Input from './Input/Input'
import {signup, login} from '../../actions/user'
import {useHistory} from 'react-router-dom';
import "./AuthForm.css"

const initialState = {
    name:'',
    email:'',
    phone:'',
    password:'',
    confirmPassword: '',
}


const AuthForm = () => {
    const [userData, setuserData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();


    const handleChange = (e) =>{
        setuserData({...userData, [e.target.name]: e.target.value})
        console.log(userData);
    }
    console.log(userData);

    const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(userData);
            if(isSignup){
                dispatch(signup(userData, history))
                // console.log(userData);
            
            }
            else{
                dispatch(login(userData, history))
                // console.log(userData)
            };

    }

    const switchMode = () =>{
        setuserData(initialState);
        setIsSignup(prevMode=>!prevMode)
    }

    return (
        <div className="Box">
        <div className="paper">
            <h3>{isSignup?"Sign Up":"Login"}</h3>
            <form onSubmit={handleSubmit}>
            {isSignup && (
                <Input label="NAME" name="name" type="text" placeholder="Enter your Name"  handleChange={handleChange} />
            )}
                <Input label="EMAIL" name="email" type="email" placeholder="Enter your Email"  handleChange={handleChange} />
            {isSignup &&(
                <Input label="PHONE" name="phone" type="tel" placeholder="Enter your Phone"  handleChange={handleChange} />
            )}
                <Input label="PASSWORD" name="password" type="password" placeholder="Enter your Password"  handleChange={handleChange} />
            {isSignup && (
                <Input label="CONFIRM PASSWORD" name="confirmPassword" type="password" placeholder="Confirm your Password"  handleChange={handleChange} />
            )}
                <button className="btn" type="submit">{isSignup?"Sign Up":"Login"}</button>
            </form>
            <p>{isSignup?"Already have An Account, " : "Don't have An Account, "}<button onClick={switchMode} >{isSignup? "Login": "Sign Up"}</button></p>
        </div>
       </div> 
    )
}

export default AuthForm
