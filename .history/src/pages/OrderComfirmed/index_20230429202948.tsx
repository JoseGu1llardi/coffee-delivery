import { RegularText, TitleText } from "../../components/Typography";

import { OrderConfirmedContainer, OrderDetailContainer } from "./styles";

import confirmedOrderIllustration from '../../assets/Illustration.png';

export function OrderConfirmedPage() {
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhhuul! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle">Now just wait and soon the coffee will reach you!</RegularText>
            </div>

            <section>
                <OrderDetailContainer>
                    <h1>Hello</h1>
                </OrderDetailContainer>

                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}