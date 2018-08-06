import actionTypes from '../constants/actionTypes';

function newsItemReceived(newsItem){
    return {
        type: actionTypes.NEWSITEMS_RECEIVED,
        newsItem: newsItem
    }
}

function newsReceived(news){
    return{
        type: actionTypes.NEWS_RECEIVED,
        news:news
    }
}
function newsItemLoading(){
    return {
        type: actionTypes.NEWSITEM_LOADING
    }
}

export function fetchNews(){
    return dispatch => {
        return fetch(`/news`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(newsReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}

export function fetchNewsItem(id){
    return dispatch => {
        return fetch(`/news/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(newsItemReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}

export function submitNewsStory(data){
    return dispatch => {
        return fetch('/news/', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }) .catch( (e) => console.log(e) );
    }
}