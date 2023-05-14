import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import Logo from '../../assets/logo-coffee.svg';

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={Logo} alt="" />

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple" >
                        <MapPin size={20} weight="fill" />
                        Dublin, IR
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}