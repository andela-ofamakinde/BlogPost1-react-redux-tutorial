import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchArtists } from '../actions';

class Artist extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }
  mapList() {
    if(!this.props.artists) {
      return (
        <div>No artists</div>
      )
    }
    return this.props.artists.data.map((artist) => {
      return (
        <div key={artist.name}>{artist.name}</div>
      )
    })
  }
  render() {
    return (
      <div>Artists:{this.mapList()}</div>
    )
  }
};

const mapStateToProps = (state) => {
  return { artists: state.artists }
}

export default connect(mapStateToProps, { fetchArtists })(Artist);