import React from 'react'

import drinks from './constants'

function Home() {
	const drinkNames = Object.keys(drinks)
	
	return (
        <div className='Home'>
			{drinkNames}
        </div>
    )
}

export default Home
