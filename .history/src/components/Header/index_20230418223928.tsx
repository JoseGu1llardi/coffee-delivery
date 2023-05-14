import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import Logo from '../../assets/Logo (1).svg';

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

                    <HeaderButton variant="yellow" >
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}