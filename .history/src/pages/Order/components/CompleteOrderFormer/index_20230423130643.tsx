import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

import { useTheme } from "styled-components";

import { TitleText } from "../../../../components/Typography";

import { SectionTitle } from "../SectionTitle";

import { CompleteOrderFormerContainer, FormSectionContainer } from "./styles";
import { AddressForm } from "./AddressForm";

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
                    subtitle="Enter the address where you want to receive your order."
                />

                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Payment"
                    subtitle="Payment is made on delivery. Choose the way you want to pay"
                    icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
                />

            </FormSectionContainer>
        </CompleteOrderFormerContainer>
    )
}