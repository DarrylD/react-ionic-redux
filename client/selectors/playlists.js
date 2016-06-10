import { createSelector } from 'reselect'

const playListSelector = (state) => state.playlists

const playlistIdSelector = (state, props) => parseInt( props.routeParams.id )

export const getPlaylistInfo = createSelector(
    playListSelector,
    playlistIdSelector,
    (playlists, playlistId) => playlists.find( entry => entry.id === playlistId )
)
