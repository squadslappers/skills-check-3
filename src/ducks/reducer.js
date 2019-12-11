const initialState = {
    user: {}
}

const GET_USER = 'GET_USER';

export function getUser(id, username, profile_pic){
    return{
        type: GET_USER,
        payload: {
            id,
            username,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return{...state, user: {payload}}
        default: return state;
    }
}