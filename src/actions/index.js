import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';

export const selectSong = song => {
  return {
    type: 'SONG_SELECTOR',
    payload: song
  };
};

export const fetchArtists = () => {
  return async function(dispatch) {
    const response =  await jsonPlaceholder.get('/users');
    
    dispatch({type: 'FETCH_ARTISTS',payload: response.data});
  }
};

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response =  await jsonPlaceholder.get('/posts');
    
    dispatch({type: 'FETCH_POSTS', payload: response.data});
  }
};

export const fetchUser = id => async dispatch => {
  const response =  await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts);
  
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}