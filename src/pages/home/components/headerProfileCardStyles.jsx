import styled from "styled-components"

export const Header = styled.header`
    max-height: 100%;
    font-family: 'Roboto Mono', monospace;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    //Blurred background in header
    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100%;
        height: 50rem;
        background-image: url("https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(5px);

        @media (max-width: 768px) {
            background-position: center;
        }
    }
`
export const StyledProfileIMG = styled.img`
    border-radius: 50%;
    max-width: 20em;
    max-height: 20em;
    align-self: center;
    justify-self: center;
    grid-area: profile;
    border: 2px solid white;
    filter: drop-shadow(5px 5px 15px black);

    @media (max-width: 768px) {
        max-width: 15em;
        max-width: 15em;
    }
`
 
export const IconContainer = styled.div`
    display: flex;
    gap: .5rem;
    width: min-content;
    height: min-content;
    grid-area: icons;
    align-self: flex-end;
    justify-self: center;

    @media (max-width:768px) {
        align-self: center;
    }
`

export const Icon = styled.i`
    font-size: 3rem;
`

//Grid for the profile card

export const ProfileCard = styled.div`
    transition: ease all .5s;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    grid-template-areas:
        "profile paragraph"
        "icons paragraph"; 
    border-radius: 25px;
    gap: 0 2rem;
    margin: 2rem auto 0 auto;
    box-sizing: border-box;
    width: 90%;
    max-width: 46rem;
    background: rgb(37, 37, 37);
    filter: drop-shadow(5px 5px 15px black);
    padding: 2rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 90%;
    }
`

export const ProfileTextContainer = styled.div`
    grid-area: paragraph;
    align-self: center;
    justify-self: center;
`

export const ProfileNameGreeting = styled.h1`
    margin: 0 0 1.5rem 0;
    width: 16rem;
    white-space: pre-line;
`

export const ProfileParagraph = styled.p`
    line-height: 170%;
    white-space: pre-line;
    margin: 0;
    width: 15rem;
`