import { RegularText, TitleText } from "../../components/Typography";

import { OrderConfirmedContainer } from "./styles";

export function OrderConfirmedPage() {
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhhuul! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle"></RegularText>
            </div>
        </OrderConfirmedContainer>
    )
}