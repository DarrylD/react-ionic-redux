
import { createAction } from 'redux-actions'

export const addPlaylist = createAction('add playlist')
export const deletePlaylist = createAction('delete playlist')
export const editPlaylist = createAction('edit playlist')

export const setNavbarInfo = createAction('set navbar info')

export const layoutReset = createAction('layout reset')
export const layoutSideMenu = createAction('layout side menu')
export const layoutModal = createAction('layout modal')
