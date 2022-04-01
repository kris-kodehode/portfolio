import styled from "styled-components"
import Slider from "react-slick"

export const ProjectsContainer = styled.div`
    transition: ease all .5s;
    margin-top: 50px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
`

export const ProjectCard = styled.div`
    transition: ease all .5s;
    display: flex;
    flex-direction: column;
    color: white;
    width: 25rem;
    height: 18rem;
    border-radius: 25px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 768px) {
        width: 20rem;
    }
`

export const ProjectText = styled.div`
    background-color: rgb(77, 77, 77);
    border-radius: 20px 20px 0 0;
    text-align: center;
    font-weight: 500;
    color: white;
    p{
        margin: .5rem;
    }
`

export const ProjectButtons = styled.div`
    background-color: rgb(37, 37, 37);
    margin-top: auto;
    button {
        box-sizing: border-box;
        width: 50%;
        height: 2.5rem;
        font-size: 1rem;
        font-family: 'Roboto Mono', monospace;
        color: white;
        background: rgb(37, 37, 37);
        border-radius: 0 0 25px 25px;
        border: none;

        &:hover, &:active {
            color: #5dccff;
            background: rgb(77, 77, 77);
            cursor: pointer;
        }
    }
`

export const StyledSlider = styled(Slider)`

    margin: 0 auto;
    width: 100%;
    max-width: 1700px;

    @media (max-width: 768px) {
        width: 100%;
    }

    .slick-slide { 
        width:600px; 
            @media (max-width: 768px) {
            width: 520px;
        }
    }
    .slick-dots li button::before{
        color: white !important;
    }

    .forCarousel{
    }
`