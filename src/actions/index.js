//Action creator
import jsonPlaceholder from '../apis/jsonplaceholder';

export const selectSong = song => {
  return {
    type: 'SONG_SELECTOR',
    payload: song
  };
};

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/post');
  return {
    type: 'FETCH_POST',
    payload: response
  };
};