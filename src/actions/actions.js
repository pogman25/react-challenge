import fetch from 'isomorphic-fetch';
import { SEARCH_PEOPLE, SORT, SORT_BY_PICTURE, GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCESS, GET_PEOPLE_ERROR, SET_ID } from '../constants'

export function search (event) {
    return (dispatch) => {

        dispatch({
            type: SEARCH_PEOPLE,
            payload: event
        })
    }
}

export function sort (sort, by) {
    return (dispatch) => {
        dispatch ({
            type: SORT,
            payload: {sort, by}
        })
    }
}

export function sortByPicture (sort) {
    return (dispatch) => {
        dispatch ({
            type: SORT_BY_PICTURE,
            payload: sort
        })
    }
}

export function getPeople() {
    return dispatch => {
        dispatch({
            type: GET_PEOPLE_REQUEST
        });

        fetch('http://rtivital.github.io/react-challenge-sort-and-search/data.json')
            .then(data => data.json())
            .then(res => setTimeout(() => {
                dispatch({
                    type: GET_PEOPLE_SUCCESS,
                    payload: res
                })
            },1000))
            .catch(err => {throw dispatch({
                type: GET_PEOPLE_ERROR,
                payload: err
            })});
    }
}

export function setId(id=0) {
    return dispatch => {
        dispatch({
            type: SET_ID,
            payload: id
        })
    }
}