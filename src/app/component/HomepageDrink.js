import React from 'react'
import PropTypes from 'prop-types'

import HomepageDrinkStyled from '../styled/homepageDrinkStyle'

function HomepageDrink(props) {
    const { name } = props
    return (
        <HomepageDrinkStyled>
            <img src={`../../../images/${name}.png`} />
            {name}
        </HomepageDrinkStyled>
    )
}

HomepageDrink.propTypes = {
    name: PropTypes.string
}

export default HomepageDrink
