
import React from 'react'

const Json = ({data}) => {
    return (
        <pre style={{padding:15}}>{JSON.stringify(data, null, 2) }</pre>
    )
}

export default Json
