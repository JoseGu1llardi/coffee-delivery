import { InputHTMLAttributes, forwardRef } from "react";

import { InputStyleContainer, InputWrapper } from "./styles";

import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, rightText, ...props }, ref) => {
        return (
            <InputWrapper className={className}>
                <InputStyleContainer>
                    <InputStyled {...props} ref={ref} />
                    {rightText}
                </InputStyleContainer>
                {
                    error && (
                        <RegularText size="s">{error}</RegularText>
                    )
                }
            </InputWrapper>
        )
    }
)