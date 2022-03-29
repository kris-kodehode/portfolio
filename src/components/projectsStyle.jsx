import styled from "styled-components"

export const ProjectsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
`

export const ProjectCard = styled.div`
    color: white;
    width: 25rem;
    height: 18rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const ProjectText = styled.div`
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    color: black;
`

export const ProjectButtons = styled.div`
    button {
        width: 8rem;
        height: 2rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
    }
`