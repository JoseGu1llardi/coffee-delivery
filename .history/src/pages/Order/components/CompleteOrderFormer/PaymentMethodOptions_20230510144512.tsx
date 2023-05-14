import { Bank, CreditCard, Money } from "@phosphor-icons/react";

import { PaymentMethodInput } from "./PaymentMethodInput";

import { PaymentMethodOptionsContainer } from "./styles";

const paymentMethods = {
    credit: {
        label: "Credit Card",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Debit Card",
        icon: <Bank size={16} />
    },
    money: {
        label: "Cash",
        icon: <Money size={16} />
    }
}

export function PaymentMethodOptions() {
    return (
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
        </PaymentMethodOptionsContainer>
    )
}