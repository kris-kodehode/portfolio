import styled from "styled-components"

export const AboutMeContainer = styled.section`
    line-height: 170%;
    padding: 2rem 4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: rgb(37, 37, 37);
    filter: drop-shadow(5px 5px 15px black);
    width: 90%;
    max-width: 1000px;
    border-radius: 25px;
    font-family: 'Roboto Mono', monospace;
    color: white;
    white-space: pre-line;

    @media (max-width: 768px) {
        padding: 2rem 2rem;
    }
`

export const AboutMeTitle = styled.h2`
    margin: 1.5rem auto;
    font-size: 1.5rem;
`

export const AboutMeParagraph = styled.p`
    
`