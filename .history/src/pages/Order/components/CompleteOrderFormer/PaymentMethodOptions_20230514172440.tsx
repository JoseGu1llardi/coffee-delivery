import { Bank, CreditCard, Money } from "@phosphor-icons/react";

import { PaymentMethodInput } from "./PaymentMethodInput";

import { PaymentMethodOptionsContainer } from "./styles";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
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
    const { register } = useFormContext();

    return (
        <PaymentMethodOptionsContainer>
            {
                Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                    <PaymentMethodInput
                        key={label}
                        id={key}
                        icon={icon}
                        label={label}
                        value={key}
                        {...register("paymentMethod")}
                    />
                ))
            }
        </PaymentMethodOptionsContainer>
    )
}