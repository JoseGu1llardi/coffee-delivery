import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import Logo from '../../assets/Logo (1).svg';
import { NavLink } from "react-router-dom";

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

                    <NavLink to="/order">
                        <HeaderButton variant="yellow" >
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}