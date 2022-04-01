import React from "react"
import { Header, StyledProfileIMG, ProfileCard, ProfileTextContainer, ProfileParagraph, ProfileNameGreeting } from "./headerProfileCardStyles"
import ProfileIMG from "../../../images/ProfileIMG.png"
import { profile_Text_NameGreeting, profile_Text_Paragraph, profile_Text_ProfileIMG_Alt } from "../../../language/en"
import IconCollection from "./IconCollection"

export default function HeaderProfileCard() {
    return (
        <Header>
            <ProfileCard>
                    <StyledProfileIMG src={ProfileIMG} alt={profile_Text_ProfileIMG_Alt} />
                    <IconCollection/>
                <ProfileTextContainer>
                    <ProfileNameGreeting>{profile_Text_NameGreeting}</ProfileNameGreeting>
                    <ProfileParagraph>{profile_Text_Paragraph}</ProfileParagraph>
                </ProfileTextContainer>
            </ProfileCard>
        </Header>
    )
}