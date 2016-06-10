
import React from 'react'
import style from './style.css'
import Json from 'components/_JSON'; // just for dev purposes

const BASE = (props) => {

    return (
        <div className={style.base}>
            BASE
            <Json data={props}/>
        </div>
    )
}

export default BASE
