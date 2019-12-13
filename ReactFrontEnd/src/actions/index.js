//First try to fetch data from API, then try to POST to API

import * as types from './../constants/ActionTypes';

export function fetchSummaries(summaries) {
    return function (dispatch) {
    return fetch(`http://localhost:5000/api/corpusApi`).then(
       response => response.json(),
       error => console.log("error!") 
    )
    }
}