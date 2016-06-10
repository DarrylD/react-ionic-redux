import React, { Component } from 'react'
import { IonContent } from 'reactionic';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MainActions from 'actions'

import {layoutHelper} from 'decorators';

import style from './style.css'

@connect(
    state => ({ //mapStateToProps
        layout: state.layout,
        navbar: state.navbar,
    }),
    dispatch => ({ //mapDispatchToProps
        actions: bindActionCreators(MainActions, dispatch)
    })
)
@layoutHelper
class NoMatch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { actions } = this.props

        actions.setNavbarInfo({
            title: 'Welp...',
        });

    }

    render() {
        return (
            <IonContent customClasses="padding" className={style.base}>
                <h2>Nothing here...</h2>
            </IonContent>
        )
    }
}

export default NoMatch
