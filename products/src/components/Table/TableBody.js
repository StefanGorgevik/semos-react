import React from 'react'

import TableTools from './TableTools/TableTools'

const table = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.id.toFixed(5)}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <TableTools deleted={props.deleteProduct}
                            show={props.showEditProduct}
                />
            </tr>
        </tbody>
    )
}

export default table