import { fetch } from './csrf';

const initialState = {
    GroupName: "Test Group",
    GroupDescription: "This is a test Group Description"
};

const SET_GROUP = 'group/setGroup';

const setGroup = (payload) => {
    return {
        type: SET_GROUP,
        payload,
    };
};

export const groupInfo = (id) => async (dispatch) => {
    console.log('thunk running')

    const response = await fetch(`/api/groups/${id}`);

    if (response.ok) {
        console.log('response ok')
        dispatch(setGroup(response.data))
    }
}

const groupReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case SET_GROUP:
            return action.payload;

        default:
            return state;
    }
}

export default groupReducer;
