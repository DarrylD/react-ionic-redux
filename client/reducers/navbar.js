
import { handleActions } from 'redux-actions'

const initialState = {
    title: 'Ionic React/Redux',
}

export default handleActions({
    'set navbar info' (state, action) {
        return action.payload
    }
}, initialState)
