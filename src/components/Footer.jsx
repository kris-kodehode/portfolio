import React from "react"
import { Copyright, StyledFooter, FooterContactContainer, FooterContactBoxSmall, IconCopyright, IconPhone, IconEmail, IconGithub, IconDiscord } from "./footerStyle"
import { footer_Text_Copyright, footer_Text_EmailTo, footer_Text_Email, footer_Text_GithubLink, footer_Text_Github, footer_Text_Phone, footer_Text_DiscordLink , footer_Text_Discord } from "../language/en"

const copyText = function Copy() {
    navigator.clipboard.writeText(footer_Text_Phone)
}



export default function Footer() {
    return (
        <StyledFooter>
            <FooterContactContainer>
                <FooterContactBoxSmall onClick={copyText}>
                    <IconPhone />
                    {footer_Text_Phone}
                </FooterContactBoxSmall>

                <FooterContactBoxSmall href={footer_Text_EmailTo + footer_Text_Email}>
                    <IconEmail />
                    {footer_Text_Email}
                </FooterContactBoxSmall>

                <FooterContactBoxSmall href={footer_Text_GithubLink}>
                    <IconGithub />
                    {footer_Text_Github}
                </FooterContactBoxSmall>

                <FooterContactBoxSmall href={footer_Text_DiscordLink}>
                    <IconDiscord />
                    {footer_Text_Discord}
                </FooterContactBoxSmall>
            </FooterContactContainer>

            <Copyright>
                <IconCopyright />
                {footer_Text_Copyright}
            </Copyright>
        </StyledFooter>
    )
}