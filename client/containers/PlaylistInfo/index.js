
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import * as MainActions from 'actions'

import { IonContent, IonButton } from 'reactionic';

import {getPlaylistInfo} from 'selectors/playlists';
import {layoutHelper} from 'decorators';

import JSON from 'components/_JSON';

import style from './style.css'

@connect(
    (state, props) => ({ //mapStateToProps
        layout: state.layout,
        navbar: state.navbar,
        playlistInfo: getPlaylistInfo(state, props)
    }),
    dispatch => ({ //mapDispatchToProps
        actions: bindActionCreators(MainActions, dispatch)
    })
)
@layoutHelper
class PlaylistInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            text: this.props.playlistInfo.label || '',
        }
    }

    componentDidMount() {

        const { actions, playlistInfo } = this.props

        actions.setNavbarInfo({
            title: `Playlist: ${playlistInfo.label}`,
        });

    }

    handleDelete(){
        const { playlistInfo:{ id }, actions } = this.props

        actions.deletePlaylist(id)

        browserHistory.push( '/' )
    }

    handleEdit(){
        this.setState({ editing: true })
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleSave(){
        const payload = {
            id: this.props.playlistInfo.id,
            label: this.state.text
        }

        this.props.actions.editPlaylist( payload )
        this.setState({ editing: false })
    }

    render() {
        const { playlistInfo } = this.props

        // we may need this since the delete happens before the redirect
        if (!playlistInfo) {
            return null
        }

        const title = this.state.editing
            ? <input type="text" autoFocus={true} value={this.state.text} className={style.edit} onChange={::this.handleChange}/>
            : <h2>{playlistInfo.label}</h2>

        const editSaveButton = this.state.editing
            ? <IonButton onClick={::this.handleSave} color="balanced" expand="block">Save</IonButton>
            : <IonButton onClick={::this.handleEdit} type="outline" color="balanced" expand="block">Edit</IonButton>

        return (
            <IonContent customClasses="has-header padding" className={style.base}>

                {title}

                <JSON data={playlistInfo} />

                {editSaveButton}

                <IonButton onClick={::this.handleDelete} type="outline" color="assertive" expand="block">Delete</IonButton>

            </IonContent>
        )
    }
}

export default PlaylistInfo
