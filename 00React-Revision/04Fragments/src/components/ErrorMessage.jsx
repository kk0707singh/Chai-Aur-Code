import React from 'react'

function ErrorMessage() {
    let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi']

    return (
        <>
        {foodItems.length === 0 ? <h3>Iam still hungrey</h3> : null}
        </>
    )
}

export default ErrorMessage
