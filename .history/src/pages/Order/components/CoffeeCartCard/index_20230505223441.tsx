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
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const { changeCartItemQuantity } = useCart();

    const coffeeTotal = coffee.price * coffee.quantity;
    const formatedPrice = formatMoney(coffeeTotal);

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase");
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease");
    }

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />

                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" quantity={coffee.quantity} />
                        <RemoveButton>
                            <Trash size={16} weight="fill" />
                            REMOVE
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>{formatedPrice}</p>
        </CoffeeCartCardContainer>
    )
}