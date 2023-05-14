import { HeaderContainer } from "./styles";

import Logo from '../../assets/logo-coffee.svg';

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="" />
            </div>
        </HeaderContainer>
    )
}