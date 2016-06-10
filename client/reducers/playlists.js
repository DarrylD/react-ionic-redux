
import { handleActions } from 'redux-actions'

// gonna load up some initial entries
const initialState = [
    {
        label: 'Todays Biggest Hits',
        id: 0
    },
    {
        label: 'Summer Break',
        id: 1
    },
    {
        label: 'New Music',
        id: 2
    },
    {
        label: 'Handing out',
        id: 3
    },
    {
        label: 'Shindig Tunes',
        id: 4
    },
    {
        label: 'Working out',
        id: 5
    },
    {
        label: '90\'s Hip Hop',
        id: 6
    },

]

export default handleActions({
    'add playlist' (state, action) {
        return [{
            id: state.reduce((maxId, playlist) => Math.max(playlist.id, maxId), -1) + 1,
            label: action.payload
        }, ...state]
    },

    'delete playlist' (state, action) {
        return state.filter(playlist => playlist.id !== action.payload )
    },

    'edit playlist' (state, action) {
        return state.map(playlist => {
            return playlist.id === action.payload.id
                ? { ...playlist, label: action.payload.label }
                : playlist
        })
    },
}, initialState)
