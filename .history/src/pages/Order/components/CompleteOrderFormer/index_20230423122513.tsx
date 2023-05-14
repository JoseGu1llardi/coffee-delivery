import { MapPinLine } from "@phosphor-icons/react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormerContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";

export function CompleteOrderFormer() {
    const { colors } = useTheme();

    return (
        <CompleteOrderFormerContainer>
            <TitleText size="xs" color="subtitle">
                Complete your order
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    icon={<MapPinLine size={22} color={ } />}
                    title="Delivery address"
                    subtitle="enter the address where you want to receive your order."
                />
            </FormSectionContainer>
        </CompleteOrderFormerContainer>
    )
}