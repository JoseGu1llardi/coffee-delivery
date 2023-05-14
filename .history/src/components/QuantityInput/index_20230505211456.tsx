import { Minus, Plus } from "@phosphor-icons/react";

import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
    size?: "medium" | "small";
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function QuantityInput({ quantity, onIncrease, onDecrease, size }: QuantityInputProps) {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <Minus size={14} weight="light" />
            </IconWrapper>

            <input type="number" readOnly value={quantity} />

            <IconWrapper onClick={onIncrease}>
                <Plus size={14} weight="light" />
            </IconWrapper>
        </QuantityInputContainer>
    )
}