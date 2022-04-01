import styled from "styled-components";
import { AiFillPhone, AiFillGithub, AiOutlineCopyright } from "react-icons/ai"
import { SiGmail, SiDiscord } from "react-icons/si"

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: #333333;
    gap: 5rem;
    width: 100%;
    padding: 2rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const FooterContactContainer = styled.div`
    color: white;
    font-family: 'Roboto Mono', monospace;
`

export const FooterContactInfo = styled.a`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    gap: .5rem;
    margin-bottom: .5rem;
    font-size: 1rem;
    width: fit-content;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
        color: #5dccff;
    }
`

export const IconPhone = styled(AiFillPhone)`
`

export const IconEmail = styled(SiGmail)`
`

export const IconGithub = styled(AiFillGithub)`
`

export const IconDiscord = styled(SiDiscord)`
`

export const Copyright = styled.p`
    display: flex;
    align-items: center;
    color: white;
    font-family: 'Roboto Mono', monospace;
`

export const IconCopyright = styled(AiOutlineCopyright)`
`

export const FooterThanks = styled.p`
    color: white;
`