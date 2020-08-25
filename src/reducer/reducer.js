import { HACK_LOADING, FETCH_HACK_SUCCESS, HACK_FAIL } from '../actions/actions'

const initialState = {
    hack: [],
    isLoading: false,
    error: 'Error loading...'
};

const hackReducer = (state = initialState, action) => {
    switch(action.type) {
        case HACK_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_HACK_SUCCESS:
            return {
                ...state,
                hack: action.payload,
                isLoading: false,
                error: ''
            }
        case HACK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};

export default hackReducer;