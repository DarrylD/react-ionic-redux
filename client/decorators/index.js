import React, { Component } from 'react'

// using this to mitigate context crap
// need layout state loaded
// TODO find a better solution -__-
export const layoutHelper = function(Component) {

    const DecoratedComponent = React.createClass({
        getInitialState() {
            return this.props;
        },
        render() {
            const { layout } = this.props

            if (layout) {

                //if we have a reset, need to start to remove stuff after a check
                if(layout.reset) {
                    const getSnapper = this.context.ionGetSnapper();

                    if (getSnapper && getSnapper.state().state === 'right') {
                        this.context.ionSnapper.toggle('right')
                    }
                }

                if (layout.sidemenu) {
                    this.context.ionSnapper.toggle('right')
                }

            }

            return <Component {...this.props} />
        }
    });

    DecoratedComponent.contextTypes = {
        ionSnapper: React.PropTypes.object,
        ionGetSnapper: React.PropTypes.func,
        ionShowPopover: React.PropTypes.func,
        ionShowModal: React.PropTypes.func,
        ionModal: React.PropTypes.bool,
        ionPlatform: React.PropTypes.object,
        router: React.PropTypes.object.isRequired,
        location: React.PropTypes.object
    }

    return DecoratedComponent;
};
