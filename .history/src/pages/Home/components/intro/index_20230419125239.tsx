import {
    BenefitsContainer,
    IntroContainer,
    IntroContent,
    IntroTitle
} from "./styles";

import introImg from '../../../../assets/introImg.png';

import { RegularText } from "../../../../components/Typography";

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

                    </BenefitsContainer>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}