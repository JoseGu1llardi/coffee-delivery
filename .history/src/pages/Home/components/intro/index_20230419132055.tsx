import {
    BenefitsContainer,
    IntroContainer,
    IntroContent,
    IntroTitle
} from "./styles";

import { ShoppingCart } from '@phosphor-icons/react';

import introImg from '../../../../assets/introImg.png';

import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export function Intro() {
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
                        />
                        <p>Benefits</p>
                        <p>Benefits</p>
                        <p>Benefits</p>
                    </BenefitsContainer>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}