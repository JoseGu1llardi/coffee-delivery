import { RegularText, TitleText } from "../../components/Typography";

import { MapPin } from "@phosphor-icons/react";

import { OrderConfirmedContainer, OrderDetailContainer } from "./styles";

import confirmedOrderIllustration from '../../assets/Illustration.png';
import { InfoWithIcon } from "../../components/InfoWithIcon";

export function OrderConfirmedPage() {
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhhuul! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle">Now just wait and soon the coffee will reach you!</RegularText>
            </div>

            <section>
                <OrderDetailContainer>
                    <InfoWithIcon
                        icon={MapPin}
                    />
                </OrderDetailContainer>

                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}