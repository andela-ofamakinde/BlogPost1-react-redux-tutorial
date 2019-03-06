import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import Artist from './Artist';
import Posts from './Posts';

const App = () => {
  return (
    <div>
      <SongList />
      <SongDetail />
      <Artist />
      <Posts />
    </div>
  )
}

export default App;