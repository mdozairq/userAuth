const userReducer = (state = { userData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, userData: action?.data };
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, userData: null }

        default:
            return state;
    }
}

export default userReducer