import styled from 'styled-components'

export const StyledSideBar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: right;
    top: 83px;
    left: 10vh;
    width: 300px;
    padding-top: 60px;
    padding-left: 10px;
    height: calc(100vh - 83px);
    background-color: rgba(255, 255, 255, 0.2);
    border-right: 1px solid #EAECEE;

    button {
        font-size: 17px;
        line-height: 25px;

        background: none;
        border: none;
        padding: 0;
        text-decoration: none;
        cursor: pointer;

        display: inline-block;
        width: max-content;
        color: #474F58;

        margin-left: 14px;
        margin-right: 32px;
        margin-bottom: 20px;
        justify-self-right;
      }

`

export const SideBar = () => {
    return <StyledSideBar>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
        <button>Some Link</button>
    </StyledSideBar>
}