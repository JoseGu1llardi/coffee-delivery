import { IconWrapper, QuantityInputContainer } from "./styles";

export function QuantityInput() {
    return (
        <QuantityInputContainer>
            <IconWrapper>

            </IconWrapper>
            <input type="number" readOnly value={1} />
        </QuantityInputContainer>
    )
}