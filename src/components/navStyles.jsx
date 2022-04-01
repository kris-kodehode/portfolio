import styled from "styled-components"

export const Nav = styled.nav`
    transition: ease all .5s;
    display: flex;
    width: min-content;
    box-sizing: border-box;
    gap: 2rem;
    margin: 2rem auto 0 auto;

    @media (max-width: 768px) {
        gap: 0.6rem;
    }
`

export const NavBTN = styled.button`
    box-sizing: border-box;
    width: 10rem;
    height: 2.5rem;
    font-size: 1rem;
    font-family: 'Roboto Mono', monospace;
    color: white;
    background: rgb(37, 37, 37);
    filter: drop-shadow(5px 5px 15px black);
    border-radius: 10px;
    border: none;

    &:hover, &:active {
        color: #5dccff;
        background: rgb(77, 77, 77);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 6rem;
    }
`