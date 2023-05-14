import { NavLink } from "react-router-dom";

import { Button } from "../../../../components/Button";

import { RegularText } from "../../../../components/Typography";

import { useCart } from "../../../../hooks/useCart";

import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = useCart();

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total items</RegularText>
                <RegularText>$ 9.90</RegularText>
            </div>

            <div>
                <RegularText size="s">Delivery</RegularText>
                <RegularText>$ 3.50</RegularText>
            </div>

            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">$ 29.90</RegularText>
            </div>

            <NavLink to="/confirmedOrder">
                <Button
                    text="Confirm Order"
                    disabled={cartQuantity < 1}
                />
            </NavLink>
        </ConfirmationSectionContainer>
    )
}