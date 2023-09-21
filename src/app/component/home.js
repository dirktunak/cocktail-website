import React from 'react'

import Grid from '../styled/gridStyle'
import HomepageDrink from './HomepageDrink'
import drinks from './constants'

function Home() {
    return (
        <React.Fragment>
            <div>Cocktails</div>
            <Grid>
                {Object.keys(drinks).map(drinkName => {
                    return (
                        <React.Fragment
                            key={drinkName}
                            drinkName={`react-fragment-${drinks[drinkName].name}`}>
                            <HomepageDrink
                                name={drinkName}
                                drinkName={drinks[drinkName].name}></HomepageDrink>
                        </React.Fragment>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

export default Home
