import React from 'react'
import styled from 'styled-components'
import { Route, Router } from 'react-router-dom'

import history from '../history'

import Home from './component/home'

const StyledApp = styled.div`
    text-align: center;
    min-height: 100vh;
    font-size: calc(18px + 3vmin);
    background-color: #ffffff;
    padding: 4px 0px;
`

function App() {
    return (
        <StyledApp>
            <Router history={history}>
                <Route path={'/'} component={Home} />
            </Router>
        </StyledApp>
    )
}

export default App
