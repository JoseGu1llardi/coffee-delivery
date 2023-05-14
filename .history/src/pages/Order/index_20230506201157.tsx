import { CompleteOrderFormer } from "./components/CompleteOrderFormer";

import { SelectedCoffees } from "./components/SelectedCoffees";

import { OrderContainer } from "./styles";

export function Order() {
    return (
        <OrderContainer className="container">
            <CompleteOrderFormer />
            <SelectedCoffees />
        </OrderContainer>
    )
}