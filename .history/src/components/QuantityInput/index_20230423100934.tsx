import { Minus } from "@phosphor-icons/react";
import { IconWrapper, QuantityInputContainer } from "./styles";

export function QuantityInput() {
    return (
        <QuantityInputContainer>
            <IconWrapper>
                <Minus size={14} weight="fill" />
            </IconWrapper>
            <input type="number" readOnly value={1} />
        </QuantityInputContainer>
    )
}