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
class BASE extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { actions } = this.props

        actions.setNavbarInfo({
            title: 'Base page',
        });

    }

    render() {
        return (
            <IonContent customClasses="padding" className={style.base}>
                BASE
            </IonContent>
        )
    }
}

export default BASE
