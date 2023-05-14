import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";


export function OurCoffees() {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Our Coffees
            </TitleText>

            <CoffeeList>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeList>
        </OurCoffeesContainer>
    )
}