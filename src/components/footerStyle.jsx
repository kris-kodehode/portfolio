import styled from "styled-components";
import { AiFillPhone, AiFillGithub, AiOutlineCopyright } from "react-icons/ai"
import { SiGmail, SiDiscord } from "react-icons/si"

export const StyledFooter = styled.footer`
    box-sizing: border-box;
    background-color: #333333;
    width: 100%;
    padding: 2rem;
    margin-top: 4rem;
`

export const FooterContactContainer = styled.div`
    color: white;
    font-family: 'Roboto Mono', monospace;
`

export const FooterContactBoxSmall = styled.a`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    gap: .5rem;
    margin-bottom: .5rem;

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
    justify-content: center;
    color: white;
    font-size: 1rem;
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 0;
`

export const IconCopyright = styled(AiOutlineCopyright)`
`

export const FooterThanks = styled.p`
`