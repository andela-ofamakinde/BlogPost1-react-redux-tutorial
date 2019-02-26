import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import Artist from './Artist';

const App = () => {
  return (
    <div>
      <SongList />
      <SongDetail />
      <Artist />
    </div>
  )
}

export default App;