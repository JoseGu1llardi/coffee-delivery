import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import Logo from '../../assets/Logo (1).svg';
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cartQuantity } = useCart();

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple" >
                        <MapPin size={20} weight="fill" />
                        Dublin, IR
                    </HeaderButton>

                    <NavLink to="/order">
                        <HeaderButton variant="yellow" >
                            {
                                cartQuantity >= 1 && <span>{cartQuantity}</span>
                            }
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}