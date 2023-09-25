import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import getImagePath from '../images/imagePath'

import HomepageDrinkStyled from '../styled/homepageDrinkStyle'

function HomepageDrink(props) {
    const history = useHistory()
    const { name, drinkName } = props

    const onClick = () => {
        history.push(`/${drinkName}`)
    }

    return (
        <HomepageDrinkStyled onClick={onClick}>
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
