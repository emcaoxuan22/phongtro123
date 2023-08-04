import actionTypes from "../action/actionType"

const initState = {
    isLoggedIn: false,
    token: null,
    msg: ''
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data

            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null

            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn:true,
                token:action.data,
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: ''
            }
        default:
            return state

    }

}


export default authReducer