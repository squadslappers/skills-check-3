const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
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
            return{
                ...state,
                id: payload.id, 
                username: payload.username, 
                profile_pic: payload.profile_pic
            }
        default: return state;
    }
}