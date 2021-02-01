// import { useSelector } from 'react-redux';
import { fetch } from './csrf';

const initialState = {
    email: 'gabriel@email.com',
    username: 'OptimumMars1',
};

const SET_PROFILE = 'profile/setProfile';

const setProfile = (payload) => {
    return {
        type: SET_PROFILE,
        payload,
    };
};

export const userInfo = (id) => async (dispatch) => {
    // console.log('thunk running')

    const response = await fetch(`/api/users/${id}`);

    if (response.ok) {
        // console.log('response ok')
        dispatch(setProfile(response.data))
    }
}

const profileReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case SET_PROFILE:
            return action.payload;

        default:
            return state;
    }
}

export default profileReducer;
