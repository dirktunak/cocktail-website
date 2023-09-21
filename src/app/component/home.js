import React from 'react'

import Grid from '../styled/gridStyle'
import HomepageDrink from '../styled/homepageDrinkStyle'

import drinks from './constants'

function Home() {
    return (
        <React.Fragment>
            <div>Cocktails</div>
            <Grid>
                {Object.keys(drinks).map(key => {
                    return (
                        <React.Fragment key={`react-fragment-${drinks[key].name}`}>
                            <img
                                key={`image-${drinks[key].name}`}
                                src='../../../images/frenchGimlet.png'
                            />
                            <HomepageDrink key={drinks[key].name}>{drinks[key].name}</HomepageDrink>
                        </React.Fragment>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

export default Home
