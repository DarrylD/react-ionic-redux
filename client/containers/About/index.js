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
class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { actions } = this.props

        actions.setNavbarInfo({
            title: 'About this project',
        });

    }

    render() {
        return (
            <IonContent customClasses="padding" className={style.base}>
                <h2>Ionic + React + Redux = 🔥</h2>
                <p>This project is being used as an example of how you can structure your reactonic application.</p>
            </IonContent>
        )
    }
}

export default About
