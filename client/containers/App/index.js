
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as MainActions from 'actions'

import IonItemLink from 'components/IonItemLink';


import style from './style.css'

import {
    IonNavView,
    IonView,
    IonNavBar,
    IonNavBackButton,
    IonButton,
    IonSideMenuContainer,
    IonSideMenus,
    IonSideMenu,
    IonSideMenuContent,
    IonBody,
} from 'reactionic';


@connect(
    state => {
        return { //mapStateToProps
            navbar: state.navbar
        }
    },
    dispatch => ({ //mapDispatchToProps
        actions: bindActionCreators(MainActions, dispatch)
    })
)
class App extends Component {
    constructor(props, context) {
        super(props, context);

    }

    renderSideMenu(){
        const menuItems = [
            {
                label: 'Playlists',
                route: '/'
            },
            {
                label: 'About',
                route: '/about'
            }
        ]

        return (
            <IonSideMenus>
                <IonSideMenu side="right" customClasses="side-menu">
                    <div className="bar bar-header bar-stable">
                        <h1 className="title">Main Menu</h1>
                    </div>

                    <div className="content has-header side-menu">
                        <div className="list">

                            {menuItems.map(item =>
                                <IonItemLink label={item.label} link={item.route} key={item.route}/>
                            )}

                        </div>
                    </div>
                </IonSideMenu>
            </IonSideMenus>
        )
    }

    renderNavbar(){
        const { location:{ pathname }, navbar, actions } = this.props

        // if the patch id dafault we need no back buton
        const backButton = pathname !== '/'
            ? <IonNavBackButton icon="ion-ios-arrow-back" color="" type="clear" customClasses="button-stage" />
            : null

        // our menu button to launch side nav
        const menuButton = <IonButton type="clear" icon='ion-navicon' onClick={() => { actions.layoutSideMenu(true)}} />

        return <IonNavBar customClasses="bar-dark"
            title={navbar.title}
            leftButton={backButton}
            rightButton={menuButton}
            />
    }
    render() {
        const { children, location } = this.props

        const sidemenuSettings = { disable: 'left', hyperextensible: false }

        return (
            <IonBody location={location} >

                <IonSideMenuContainer settings={sidemenuSettings}>
                    {::this.renderSideMenu()}

                    <IonSideMenuContent >
                        {::this.renderNavbar()}

                        <IonNavView customClasses="">
                            <IonView customClasses="">

                                {/*our child routes*/}
                                {children}

                            </IonView>
                        </IonNavView>

                    </IonSideMenuContent>

                </IonSideMenuContainer>

            </IonBody>
        );
    }
}

export default App
