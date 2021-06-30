import React from 'react'
import '../style/Notfound.css'
function Notfound() {
    return (
        <div className='Notfound'>
        <h1 data-testid='intro'>Picture Not Available ;(</h1>
        <p data-testid='about'>Search for anything else....</p>
        </div>
    )
}

export default Notfound
