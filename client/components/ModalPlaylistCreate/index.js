
import React, { Component } from 'react'
import style from './style.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MainActions from 'actions'

import { IonModal } from 'reactionic';

@connect(
    state => ({ //mapStateToProps
        playlists: state.playlists,
    }),
    dispatch => ({ //mapDispatchToProps
        actions: bindActionCreators(MainActions, dispatch)
    })
)
class ModalPlaylistCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text || ''
        }
    }

    static contextTypes = {
        ionShowModal: React.PropTypes.func
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleCloseModal(){
        this.context.ionShowModal( false )
    }

    handleSave(e){

        const text = e.target.value.trim()

        // disreguard if we have no text
        if (!text.length) {
            return;
        }

        // handle if we have an enter key
        if (e.which === 13) {

            this.props.actions.addPlaylist(text)

            this.setState({ text: '' })

            this.handleCloseModal()
        }

    }

    renderModalBody(){
        return (
            <div className="list">

                <div className="item item-input-inset">
                    <label className="item-input-wrapper">
                        <input
                            type="text"
                            value={this.state.text}
                            onKeyDown={::this.handleSave}
                            onChange={::this.handleChange}
                            placeholder="Ex: Traveling tracks"/>
                    </label>
                </div>
                
                <div className="item item-input-inset">
                    <p><b>Tip: </b>press enter to save...</p>
                </div>

            </div>
        )
    }

    render() {

        return (
            <IonModal
                className={style.base}
                customTemplate={false}
                title="Create New Playlist"
                barClasses="bar-dark"
                customClasses="">

                {this.renderModalBody()}

            </IonModal>
        );
    }
}

export default ModalPlaylistCreate
