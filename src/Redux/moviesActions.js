import axios from 'axios';

// constantes
const dataInicial = {
    status: 'idle',
    detail: [],
    movies: []
}

// types
const GET_MOVIES = 'GET_MOVIES'
const GET_MOVIES_DETAIL = 'GET_MOVIES_DETAIL'
const GET_MOVIES_SEARCH = 'GET_MOVIES_SEARCH'
const LOADING = 'LOADING' 

// reducer
export default function MoviesReducer(state = dataInicial, action){
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies : action.payload, status: 'success' }
        case GET_MOVIES_SEARCH:
            return { ...state, movies : action.payload, status: 'success' }            
        case GET_MOVIES_DETAIL:
                return { ...state, detail : action.payload, status: 'success' }            
        case LOADING:
            return { ...state, status: 'loading' }            
        default:
            return state;
    }
}

// actions
export const getMovies = () => async (dispatch) => {

    dispatch({
        type: LOADING 
    })

    try {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ca97fd7770844d1c83f0f67d668ddadf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
        dispatch({
            type: GET_MOVIES,
            payload: res.data.results,
          });        
    } catch (error) {
        console.log(error);
    }
}

export const getMoviesDetail = (id) => async (dispatch) => {

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ca97fd7770844d1c83f0f67d668ddadf&language=en-US`);
        dispatch({
            type: GET_MOVIES_DETAIL,
            payload: res.data,
          });        
    } catch (error) {
        console.log(error);
    }
}

export const getMoviesSearch = (string) => async (dispatch) => {

    try {
        const res = 
await axios.get(`https://api.themoviedb.org/3/search/company?api_key=ca97fd7770844d1c83f0f67d668ddadf&query=${string}&page=1`);
        dispatch({
            type: GET_MOVIES_SEARCH,
            payload: res.data.results,
          });        
    } catch (error) {
        console.log(error);
    }
}

//https://api.themoviedb.org/3/search/company?api_key=ca97fd7770844d1c83f0f67d668ddadf&query=busqueda&page=1