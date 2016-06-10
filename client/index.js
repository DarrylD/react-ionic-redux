import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import About from 'containers/About';
import NoMatch from 'containers/NoMatch';
import Playlists from 'containers/Playlists';
import PlaylistInfo from 'containers/PlaylistInfo';

require('../node_modules/reactionic/dist/scss/styles/_reactionic.scss');

const routes = (
    <Route path="/" component={App}>

        <IndexRoute component={Playlists} />

        <Route path="/about" component={About} />

        <Route path="/playlists" component={Playlists}/>

        <Route path="/playlists/:id" component={PlaylistInfo} />

        {/*error catch all*/}
        <Route path="*" component={NoMatch}/>
    </Route>
);

ReactDOM.render(
    <Provider {...{store}}>
        <Router  {...{routes, history}} />
    </Provider>,
    document.getElementById('root')
);
