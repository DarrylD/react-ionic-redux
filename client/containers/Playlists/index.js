
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MainActions from 'actions'

import { IonContent, IonIcon, IonItem } from 'reactionic';

import IonItemLink from 'components/IonItemLink';

import style from './style.css'

import {layoutHelper} from 'decorators';

import ModalPlaylistCreate from 'components/ModalPlaylistCreate';


@connect(
    state => ({ //mapStateToProps
        layout: state.layout,
        playlists: state.playlists,
    }),
    dispatch => ({ //mapDispatchToProps
        actions: bindActionCreators(MainActions, dispatch)
    })
)
@layoutHelper
class Playlists extends Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        ionShowModal: React.PropTypes.func
    }

    componentDidMount() {
        this.props.actions.setNavbarInfo({
            title: 'Playlists',
        })
    }

    handleNewPlaylist(){
        this.context.ionShowModal( <ModalPlaylistCreate /> )
    }

    render() {
        const { playlists } = this.props

        return (
            <IonContent customClasses="has-header" className={style.base}>

                <IonItem divider iconRight onClick={::this.handleNewPlaylist} >
                    These are your playlists <IonIcon icon="plus" />
                </IonItem>

                {playlists.map( entry =>
                    <IonItemLink label={entry.label} link={`/playlists/${ entry.id }`} key={entry.id}/>
                )}

            </IonContent>
        )
    }
}

export default Playlists
