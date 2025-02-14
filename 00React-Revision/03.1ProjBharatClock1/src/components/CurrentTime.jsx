import React from 'react'

function CurrentTime() {
    let time = new Date();
    return (
        <p>This is the current Time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
    )
}

export default CurrentTime
