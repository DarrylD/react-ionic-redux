
import * as actions from 'actions'

export default store => next => action  => {
    // Experimental - need to kill all layout actions once location changes
    if (action.type === '@@router/LOCATION_CHANGE') {
        store.dispatch( actions.layoutReset() )
    }

    return next(action)
}
