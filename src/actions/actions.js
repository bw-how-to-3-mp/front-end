import axios from 'axios';

export const HACK_LOADING = 'HACK_LOADING';
export const FETCH_HACK_SUCCESS = 'FETCH_HACK_SUCCESS';
export const HACK_FAIL = 'HACK_FAIL';

export const fetchHacks = () => (dispatch) => {
    dispatch({ type: HACK_LOADING })
    axios
        .get('')
        .then(res => 
            dispatch({ type: FETCH_HACK_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: HACK_FAIL, payload: err })
        )
};

export const addHack = (userHack) => (dispatch) => {
    axios
        .post('', userHack)
        .then(res =>
            dispatch({ type: FETCH_HACK_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: HACK_FAIL, payload: err })
        )
};
