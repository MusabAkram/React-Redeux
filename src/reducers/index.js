import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", Duration: "4:00" },
    { title: "Thats my name", Duration: "3:00" },
    { title: "Macarena", Duration: "3:10" },
    { title: "into you", Duration: "2:30" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
