import styled from "styled-components"

export const ProjectsWrapper = styled.section`
    line-height: 170%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
    margin: 0 auto;
    background: rgb(37, 37, 37);
    filter: drop-shadow(5px 5px 15px black);
    width: 90%;
    max-width: 1000px;
    border-radius: 25px;
    font-family: 'Roboto Mono', monospace;
    color: white;
    white-space: pre-line;
`

export const ProjectsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;

    @media (max-width: 768px) {
        padding: 2rem 2rem;
    }
`

export const StyledProjectsTitle = styled.h3`
    margin: 2rem auto;
    font-size: 1.5rem;
`

export const StyledProjectsParagraph = styled.p`
    font-family: 'Roboto Mono', monospace;
    color: white;
    white-space: pre-line;
`