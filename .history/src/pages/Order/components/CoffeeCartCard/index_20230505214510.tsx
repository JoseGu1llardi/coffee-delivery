import { Trash } from "@phosphor-icons/react";

import { QuantityInput } from "../../../../components/QuantityInput";

import { RegularText } from "../../../../components/Typography";

import { CartItem } from "../../../../contexts/CartContext";

import { formatMoney } from "../../../../utils/formatMoney";

import {
    ActionsContainer,
    CoffeeCartCardContainer,
    RemoveButton
} from "./styles";

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const coffeeTotal = coffee.price * coffee.quantity;
    const formatedPrice = formatMoney(coffeeTotal);

    console.log(formatedPrice);

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />

                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16} weight="fill" />
                            REMOVE
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>$ {coffeeTotal}</p>
        </CoffeeCartCardContainer>
    )
}