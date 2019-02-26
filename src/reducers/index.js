import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    {title: 'Oceans', duration: '4:00'},
    {title: 'New Wine', duration: '4:00'},
    {title: 'Beautiful Name', duration: '4:00'},
    {title: 'So Will I', duration: '4:00'}
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === "SONG_SELECTOR") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});