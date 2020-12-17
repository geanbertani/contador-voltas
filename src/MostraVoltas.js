import React from 'react'

const MostraVoltas = (props) => {
    return (
        <p className='voltas'>
            Volta:<br />
            <span>{props.voltas}</span>
        </p>
    )
}

export default MostraVoltas