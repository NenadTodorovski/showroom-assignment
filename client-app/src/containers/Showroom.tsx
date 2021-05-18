import React from 'react'
import styled from 'styled-components'

const StyledShowroom = styled.div`
    position: absolute;
    top: 83px;
    left: 395px;
    width: calc(100% - 395px);
    height: calc(100% - 83px);
    max-height: 100%;
`

export const Showroom = (props: any) => {
    return <StyledShowroom>{props.children}</StyledShowroom>
}


