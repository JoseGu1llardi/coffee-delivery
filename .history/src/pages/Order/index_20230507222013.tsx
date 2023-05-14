import { CompleteOrderForme } from "./components/CompleteOrderFormer";

import { SelectedCoffees } from "./components/SelectedCoffees";

import { OrderContainer } from "./styles";

export function Order() {
    return (
        <OrderContainer className="container">
            <CompleteOrderForme />
            <SelectedCoffees />
        </OrderContainer>
    )
}