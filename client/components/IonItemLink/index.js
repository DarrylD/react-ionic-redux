
import React from 'react'
import { browserHistory } from 'react-router';
import { IonIcon, IonItem } from 'reactionic';

import style from './style.css'

const IonItemLink = ({label, link}) => {

    return (
        <IonItem className={style.base} iconRight onClick={()=> browserHistory.push( link ) }>
            {label} <IonIcon icon="chevron-right" />
        </IonItem>
    )
}

export default IonItemLink
