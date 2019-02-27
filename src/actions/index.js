import jsonPlaceholder from '../apis/jsonplaceholder';

export const selectSong = song => {
  return {
    type: 'SONG_SELECTOR',
    payload: song
  };
};

export const fetchArtists = () => {
  return async function(dispatch, getState) {
    const response =  await jsonPlaceholder.get('/users');
    
    dispatch({
      type: 'FETCH_ARTIST',
      payload: response.data
    });
  }
};