import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
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
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}