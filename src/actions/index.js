import axios from 'axios'


export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ERROR_GET_COUNTRIES = 'ERROR_GET_COUNTRIES';

export function getCountries(){
    return (dispatch) => {
        console.log("haha")
        return axios(`http://api.population.io:80/1.0/countries`).then((response) => {
            dispatch({type : GET_COUNTRIES, payload: response.data.countries})
        }).catch((error) => {
            dispatch({type : ERROR_GET_COUNTRIES, errors: error.response.data.detail})
        });
    }
}