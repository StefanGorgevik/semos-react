import React from 'react'

const editProduct = (props) => {
    return (
        <div>
            <label>Name<input type='text' defaultValue={props.name} /></label>
            <label>Description<input type='text' defaultValue={props.description} /></label>
            <label>Price<input type='text' defaultValue={props.price} /></label>
            <button>Save</button>
        </div>
    )
}

export default editProduct