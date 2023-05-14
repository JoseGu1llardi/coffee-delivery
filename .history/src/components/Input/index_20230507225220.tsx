import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <InputWrapper>
                <InputStyleContainer {...props} ref={ref} />
            </InputWrapper>
        )
    }
)