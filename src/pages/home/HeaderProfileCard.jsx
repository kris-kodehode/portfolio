import React from "react"
import { Header, ProfileIMG, ProfileCard, ProfileTextContainer, ProfileParagraph, ProfileNameGreeting } from "./headerProfileCardStyles"
import placeholderProfile from "../../images/placeholderProfile.png"
import { profile_Text_NameGreeting, profile_Text_Paragraph, profile_Text_ProfileIMG_Alt } from "../../language/en"
import IconCollection from "../home/components/IconCollection"

export default function HeaderProfileCard() {
    return (
        <Header>
            <ProfileCard>
                    <ProfileIMG src={placeholderProfile} alt={profile_Text_ProfileIMG_Alt} />
                    <IconCollection/>
                <ProfileTextContainer>
                    <ProfileNameGreeting>{profile_Text_NameGreeting}</ProfileNameGreeting>
                    <ProfileParagraph>{profile_Text_Paragraph}</ProfileParagraph>
                </ProfileTextContainer>
            </ProfileCard>
        </Header>
    )
}