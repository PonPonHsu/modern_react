import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: '我期待', Duration: '5:54'},
        {title: '彩虹', Duration: '4:38'},
        {title: 'Lost Stars', Duration: '4:35'},
        {title: 'My Heart Draws a Dream', Duration: '4:16'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

