
import { handleActions } from 'redux-actions'

const initialState = {
    sidemenu: false,
}

export default handleActions({
    'layout side menu' (state, action) {
        return {
            sidemenu: action.payload
        }
    },
    'layout modal' (state, action) { // XXX is this needed?
        return {
            modal: action.payload
        }
    },
    'layout reset' (state, action) {
        return {
            reset: true
        }
    }
}, initialState)
