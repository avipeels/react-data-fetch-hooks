import {
    useState,
    useEffect,
    useReducer
} from 'react';
import axios from 'axios';
const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            throw new Error();
    }
}
const useApi = (initialUrl, initialData) => {

    const [url, setUrl] = useState(initialUrl);

    /**  useReducer hooks returns us 
     * 1. State object
     * 2. Dispatch function to alter state object. This function takes an action which has type
     *    and optional payload. All this information can be used in actual reducer function to
     *    distill a new state from 
     *    a. Previous State
     *    b. Action Type
     *    c. Action Payload
     */
    const [state, dispatch] = useReducer(dataFetchReducer, {
        loading: false,
        error: false,
        data: initialData
    });
    // Can't have async directly on useEffect. Can be done inside it.
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await axios.get(url);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAILURE' });
            }
        }
        fetchData();
    }, [url]);

    return [state, setUrl];
}

export default useApi;
