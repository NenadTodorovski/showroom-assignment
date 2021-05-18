import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    position: fixed;
    top: 0px;
    left: 10vh;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 83px;
    padding: 0px;
    border-bottom: 1px solid #EAECEE;
    margin: 0px;
    background-color: rgba(255, 255, 255);
    z-index: 1;
`

export const NavBar = () => {
    return (
        <StyledHeader>
            <nav style={{ width: '100%' }}>
                <h1 style={{ paddingRight: '100px' }}>VAN HEUSEN</h1>
            </nav>
        </StyledHeader>
    )
}