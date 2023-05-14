import { PaymentMethodContainer, ContentContainer } from "./styles";

import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export function PaymentMethodInput(: PaymentMethodInputProps) {
    return (
        
    )
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
    return (
        <PaymentMethodContainer>
            <input id={id} type="radio" {...props} name="paymentMethod" />
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodContainer>
    )
});