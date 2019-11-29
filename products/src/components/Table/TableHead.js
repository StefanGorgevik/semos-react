import React from 'react'



const tableHead = (props) => {
    return (
        <table className="Table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Tools</th>
                </tr>
            </thead>
            {props.children}
        </table>
    )
}

export default tableHead