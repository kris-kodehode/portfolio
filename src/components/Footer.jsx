import React from "react"
import { Copyright, StyledFooter, FooterContactContainer, FooterContactBoxSmall, IconCopyright, IconPhone, IconEmail, IconGithub, IconDiscord } from "./footerStyle"
import { footer_Text_Copyright, footer_Text_Email, footer_Text_Github, footer_Text_Phone } from "../language/en"

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContactContainer>
                <FooterContactBoxSmall>
                    <IconPhone/>
                    {footer_Text_Phone}
                </FooterContactBoxSmall>
                <FooterContactBoxSmall>
                    <IconEmail/>
                    {footer_Text_Email}
                </FooterContactBoxSmall>

                <FooterContactBoxSmall href={footer_Text_Github}>
                    <IconGithub/>
                    GitHub
                </FooterContactBoxSmall>

                <FooterContactBoxSmall>
                    <IconDiscord/>
                </FooterContactBoxSmall>
            </FooterContactContainer>
            <Copyright>
                <IconCopyright/>
                {footer_Text_Copyright}
            </Copyright>
        </StyledFooter>
    )
}