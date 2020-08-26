import axiosWithAuth from '../components/axiosWithAuth';

export const HACK_LOADING = 'HACK_LOADING';
export const FETCH_HACK_SUCCESS = 'FETCH_HACK_SUCCESS';
export const HACK_FAIL = 'HACK_FAIL';
export const SEARCH_HACKS = 'SEARCH_HACKS';

export const fetchHacks = () => (dispatch) => {
    dispatch({ type: HACK_LOADING })
    axiosWithAuth()
        .get('/posts/posts')
        .then(res => {
            dispatch({ type: FETCH_HACK_SUCCESS, payload: res.data })
            console.log(res.data)
        } )
        .catch(err =>
            dispatch({ type: HACK_FAIL, payload: err })
        )
};

export const addHack = (userHack) => (dispatch) => {
    axiosWithAuth()
        .post('/posts/post', userHack)
        .then(res =>
            dispatch({ type: FETCH_HACK_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: HACK_FAIL, payload: err })
        )
};

export const searchHacks = (hack) => (dispatch) => {
    dispatch({ type: SEARCH_HACKS, payload: hack })
}
