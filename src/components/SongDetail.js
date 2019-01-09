import React from "react";
import { connect } from "react-redux";
const SongDetail = ({ song }) => {
  if (song) {
    return (
      <div>
        <h2>Selected Song Detail</h2>
        <br />
        <h3>{song.title}</h3>
        <br />
        <p>{song.Duration}</p>
      </div>
    );
  }
  return <div>No song selected</div>;
};
const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
