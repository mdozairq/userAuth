import * as api from '../api/index';

export const login = (userData, history) => async(dispatch) => {
    try {
        const {data} = await api.login(userData);
        dispatch({type:'AUTH', data})

        history.push('/profile');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (userData, history) => async(dispatch) =>{
    try {
        const {data} = await api.signup(userData);
        dispatch({type:'AUTH', data});

        history.push('/')
    } catch (error) {
        console.log(error);
    }
}