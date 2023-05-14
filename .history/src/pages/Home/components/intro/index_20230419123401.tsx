import { IntroContainer, IntroContent, IntroTitle } from "./styles";

import introImg from '../../../../assets/introImg.png';

export function Intro() {
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle></IntroTitle>
                    </section>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}