import { CompleteOrderFormer } from "./components/CompleteOrderFormer";
import { OrderContainer } from "./styles";

export function Order() {
    return (
        <OrderContainer className="container">
            <CompleteOrderFormer />
        </OrderContainer>
    )
}