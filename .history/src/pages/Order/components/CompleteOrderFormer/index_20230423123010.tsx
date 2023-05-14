import { MapPinLine } from "@phosphor-icons/react";

import { useTheme } from "styled-components";

import { TitleText } from "../../../../components/Typography";

import { SectionTitle } from "../SectionTitle";

import { CompleteOrderFormerContainer, FormSectionContainer } from "./styles";

export function CompleteOrderFormer() {
    const { colors } = useTheme();

    return (
        <CompleteOrderFormerContainer>
            <TitleText size="xs" color="subtitle">
                Complete your order
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
                    title="Delivery address"
                    subtitle="enter the address where you want to receive your order."
                />
            </FormSectionContainer>
        </CompleteOrderFormerContainer>
    )
}