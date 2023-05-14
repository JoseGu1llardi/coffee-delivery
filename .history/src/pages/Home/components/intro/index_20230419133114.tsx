import {
    BenefitsContainer,
    IntroContainer,
    IntroContent,
    IntroTitle
} from "./styles";

import { useTheme } from "styled-components";

import { ShoppingCart, Package } from '@phosphor-icons/react';

import introImg from '../../../../assets/introImg.png';

import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export function Intro() {
    const { colors } = useTheme();

    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Find the perfect coffee for any time of day
                        </IntroTitle>

                        <RegularText size="l" color="subtitle" as="h3">
                            With Coffee Delivery you get your coffee wherever you are, anytime
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                        <InfoWithIcon
                            icon={<ShoppingCart weight="fill" />}
                            text="Simple and safe purchase"
                            iconBg={colors["brand-yellow"]}
                        />
                        <InfoWithIcon
                            icon={<Package weight="fill" />}
                            text="Fast and tracked delivery"
                            iconBg={colors["brand-yellow"]}
                        />
                        <InfoWithIcon
                            icon={<ShoppingCart weight="fill" />}
                            text="Packaging keeps the coffee intact"
                            iconBg={colors["brand-yellow"]}
                        />
                        <InfoWithIcon
                            icon={<ShoppingCart weight="fill" />}
                            text="The coffee comes fresh to you"
                            iconBg={colors["brand-yellow"]}
                        />
                    </BenefitsContainer>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}