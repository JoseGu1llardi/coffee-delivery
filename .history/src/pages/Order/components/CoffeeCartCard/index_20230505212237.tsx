import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
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

            <p>{formatMoney(coffee.price)}</p>
        </CoffeeCartCardContainer>
    )
}