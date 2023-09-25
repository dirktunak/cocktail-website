import React from 'react'
import PropTypes from 'prop-types'

import getImagePath from '../images/imagePath'

import HomepageDrinkStyled from '../styled/homepageDrinkStyle'

function HomepageDrink(props) {
    const { name, drinkName } = props

    return (
        <HomepageDrinkStyled>
            <img src={`${getImagePath()}/${drinkName}.png`} />
            {name}
        </HomepageDrinkStyled>
    )
}

HomepageDrink.propTypes = {
    name: PropTypes.string,
    drinkName: PropTypes.string
}

export default HomepageDrink
