import { ShoppingCart } from "@phosphor-icons/react";

import { QuantityInput } from "../../../../components/QuantityInput";

import { RegularText, TitleText } from "../../../../components/Typography";

import {
    AddCartWrapper,
    CardFooter,
    CoffeeCardContainer,
    Description, Name, Tags
} from "./styles";

import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);

    const { addCoffeeToCart } = useCart();

    const formattedPrice = formatMoney(coffee.price);

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity: 1
        };

        addCoffeeToCart(coffeeToAdd);
    }

    function handleIncrease() {
        setQuantity(state => state + 1);
    }

    function handleDecrease() {
        setQuantity(state => state - 1);
    }

    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {
                    coffee.tags.map(tag => (
                        <span key={`${coffee.id}${tag}`}>{tag}</span>
                    ))
                }
            </Tags>

            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput
                        quantity={quantity}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}