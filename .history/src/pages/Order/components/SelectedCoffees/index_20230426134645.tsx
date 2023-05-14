import { TitleText } from "../../../../components/Typography";
import { SelectedCoffeesContainer } from "./styles";


export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Selected Coffees
            </TitleText>
        </SelectedCoffeesContainer>
    )
}