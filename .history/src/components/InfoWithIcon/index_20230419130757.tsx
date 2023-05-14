import { ReactNode } from "react";

import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIcon {
    icon: ReactNode;
    text: string | ReactNode;
    variantColor: string;
}

export function InfoWithIcon({ icon }: InfoWithIconProps) {
    return (
        <InfoWithIconContainer>
            <IconContainer>{icon}</IconContainer>
        </InfoWithIconContainer>
    )
}