import React from 'react'

const tableTools = (props) => {
    return (
        <td>
            <button onClick={props.show}>Edit</button>
            <button onClick={props.deleted}>Delete</button>
        </td>
    )
}

export default tableTools