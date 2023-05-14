import { RegularText, TitleText } from "../../components/Typography";

import { OrderConfirmedContainer } from "./styles";

export function OrderConfirmedPage() {
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhhuul! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle">Now just wait and soon the coffee will reach you!</RegularText>
            </div>
        </OrderConfirmedContainer>
    )
}