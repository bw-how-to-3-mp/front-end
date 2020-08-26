import { HACK_LOADING, FETCH_HACK_SUCCESS, HACK_FAIL, SEARCH_HACKS } from '../actions/actions'

const initialState = {
    hack: [],
    searchData: [],
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
        case SEARCH_HACKS:
            return {
                ...state,
                searchData: action.payload,
                isLoading: false
            }
        default:
            return state
    }
};

export default hackReducer;