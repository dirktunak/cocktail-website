import React from 'react'
import { useParams } from 'react-router-dom'

import drinks from '../drinks'
import getImagePath from '../images/imagePath'
import StyledDrinkDetail from '../styled/drinkDetailStyle'

function DrinkDetails() {
    const { drink } = useParams()

    const { ingredients } = drinks[drink]

    return (
        <StyledDrinkDetail>
            <div>{drinks[drink].name}</div>
            <img src={`${getImagePath()}/${drink}.png`} />
            {Object.values(ingredients).map(ingredient => {
                return (
                    <div key={ingredient.name}>
                        {ingredient.name} {ingredient.amount}
                    </div>
                )
            })}
        </StyledDrinkDetail>
    )
}

export default DrinkDetails
