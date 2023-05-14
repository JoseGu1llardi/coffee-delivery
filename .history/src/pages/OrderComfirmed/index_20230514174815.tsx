import { useLocation } from "react-router-dom";

import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";

import { RegularText, TitleText } from "../../components/Typography";

import { OrderConfirmedContainer, OrderDetailContainer } from "./styles";

import confirmedOrderIllustration from '../../assets/Illustration.png';

import { InfoWithIcon } from "../../components/InfoWithIcon";

import { useTheme } from "styled-components";

import { OrderData } from "../Order";

interface LocationType {
    state: OrderData
}

export function OrderConfirmedPage() {
    const { colors } = useTheme();

    const { state } = useLocation() as unknown as LocationType;

    console.log(state);

    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhhuul! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle">Now just wait and soon the coffee will reach you!</RegularText>
            </div>

            <section>
                <OrderDetailContainer>
                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Delivery at <strong>Rua João Daniel Martinelli, 102 Farrapos</strong> - Porto Alegre, RS
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Estimated delivery <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />
                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <RegularText>
                                Payment on delivery <br />
                                <strong>Credit or debit cart</strong>
                            </RegularText>
                        }
                    />
                </OrderDetailContainer>

                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}