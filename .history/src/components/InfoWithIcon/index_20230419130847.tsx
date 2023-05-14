import { ReactNode } from "react";

import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    variantColor: string;
}

export function InfoWithIcon({ icon, text, variantColor }: InfoWithIconProps) {
    return (
        <InfoWithIconContainer>
            <IconContainer>{icon}</IconContainer>
        </InfoWithIconContainer>
    )
}