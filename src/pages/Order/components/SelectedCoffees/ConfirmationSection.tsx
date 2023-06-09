import { NavLink } from "react-router-dom";

import { Button } from "../../../../components/Button";

import { RegularText } from "../../../../components/Typography";

import { useCart } from "../../../../hooks/useCart";

import { ConfirmationSectionContainer } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total items</RegularText>
                <RegularText>{formattedItemsTotal}</RegularText>
            </div>

            <div>
                <RegularText size="s">Delivery</RegularText>
                <RegularText>{formattedDeliveryPrice}</RegularText>
            </div>

            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">{formattedCartTotal}</RegularText>
            </div>

            <Button
                text="Confirm Order"
                disabled={cartQuantity < 1}
                type="submit"
            />
        </ConfirmationSectionContainer>
    )
}