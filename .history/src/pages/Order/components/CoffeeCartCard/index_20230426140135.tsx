import { RegularText } from "../../../../components/Typography";
import { CoffeeCartCardContainer } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="../../../../../public/coffees/irlandes.png" />

                <div>
                    <RegularText color="subtitle">Irish Coffee</RegularText>
                </div>
            </div>

            <p>$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}