import { CreditCard } from "@phosphor-icons/react";

import { PaymentMethodContainer } from "./styles";

export function PaymentMethodInput() {
    return (
        <PaymentMethodContainer>
            <CreditCard size={16} />
            Credit card
        </PaymentMethodContainer>
    )
}