import { HeaderButtonsContainer, HeaderContainer } from "./styles";

import Logo from '../../assets/logo-coffee.svg';

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={Logo} alt="" />

                <HeaderButtonsContainer>

                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}