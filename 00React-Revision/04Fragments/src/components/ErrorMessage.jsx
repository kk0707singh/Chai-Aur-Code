import React from 'react'

function ErrorMessage({ items }) {
    // let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi']

    return (
        <>
        {items.length === 0 ? <h3>Iam still hungrey</h3> : null}
        </>
    )
}

export default ErrorMessage
