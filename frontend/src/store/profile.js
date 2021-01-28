// import { useSelector } from 'react-redux';
import { fetch } from './csrf';

const initialState = {
    email: 'gabriel@email.com',
    username: 'OptimumMars1',
};

const SET_USER = 'profile/setUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const userInfo = (id) => async (dispatch) => {

    const response = await fetch(`/api/users/${id}`);
    dispatch(setUser(response.data.user))
}

const profileReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case SET_USER:
            return action.payload;

        default:
            return state;
    }
}

export default profileReducer;
