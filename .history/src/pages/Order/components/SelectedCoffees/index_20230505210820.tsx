import { TitleText } from "../../../../components/Typography";

import { CoffeeCartCard } from "../CoffeeCartCard";

import { ConfirmationSection } from "./ConfirmationSection";

import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Selected Coffees
            </TitleText>

            <DetailsContainer>
                <CoffeeCartCard />
                <CoffeeCartCard />
                <CoffeeCartCard />

                <ConfirmationSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}