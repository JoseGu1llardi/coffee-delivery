import { IntroContainer, IntroContent, IntroTitle } from "./styles";

import introImg from '../../../../assets/introImg.png';

export function Intro() {
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Find the perfect coffee for any time of day
                        </IntroTitle>
                    </section>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}