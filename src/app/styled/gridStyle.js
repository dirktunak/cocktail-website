import styled from 'styled-components'

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 4px;
    img {
        object-fit: cover;
        width: 100%;
        max-height: 100%;
    }
`

export default StyledGrid
