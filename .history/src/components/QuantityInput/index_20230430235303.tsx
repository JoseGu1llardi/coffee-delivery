import { Minus, Plus } from "@phosphor-icons/react";

import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
    size?: "medium" | "small";
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function QuantityInput({ quantity, onIncrease, onDecrease, size = "medium" }: QuantityInputProps) {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper>
                <Minus size={14} weight="light" />
            </IconWrapper>

            <input type="number" readOnly value={1} />

            <IconWrapper>
                <Plus size={14} weight="light" />
            </IconWrapper>
        </QuantityInputContainer>
    )
}