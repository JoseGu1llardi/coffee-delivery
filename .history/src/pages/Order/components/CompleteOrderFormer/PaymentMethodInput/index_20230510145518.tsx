import { CreditCard } from "@phosphor-icons/react";

import { PaymentMethodContainer } from "./styles";
import { InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export function PaymentMethodInput({ id, icon, label, ...props }: PaymentMethodInputProps) {
    return (
        <PaymentMethodContainer>
            <CreditCard size={16} />
            Credit card
        </PaymentMethodContainer>
    )
}