import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({selectedSong}) => {
  if(!selectedSong) {
    return (
      <div>
        SongDetail: Select a song
      </div>
    )
  }
  return (
    <div>
      SongDetail: {selectedSong.title}
    </div>
  )
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);