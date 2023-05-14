import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="../../../../../public/coffees/irlandes.png" />

                <div>
                    <RegularText color="subtitle">Irish Coffee</RegularText>
                    <ActionsContainer>
                        <QuantityInput />
                        <RemoveButton>
                            <Trash size={16} weight="fill" />
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}