import { TitleText } from "../../../../components/Typography";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";


export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Selected Coffees
            </TitleText>

            <DetailsContainer>
                <p>Items</p>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}