import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from "../../../../contexts/CartContext";

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1683504000&Signature=dHM~R8q~YPu1gICvckX-WQFj4pZzITG1qsxCaCgGqJWqOdo4EJ8vapUicJ3D4yGQpM5ibvAIYFOQ887Slvug4hlB-gplg0T-PQMBHr-mnMwcw4XyzYOp7iwPw9geekOcJJnzIUuUdL0f2T0NgPyeFaSXsZ4g8NP5a44YREoXyoDDixlXdiJShHBwxFHzvClxQqQNwjizHNpr-G5oxI97xU6AMZ2b6cOsAL0xVi5N8uJozE73lwIb0wt-n5N9hRNbrmWifPwTLodE2q5k6D-dURPaxPCuUbLTo0LWPiqfOa4xe2UrXExgHWHdL-UBAaE28PxhwUkggS~8rghAvXWSrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

                <div>
                    <RegularText color="subtitle">Irish Coffee</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16} weight="fill" />
                            REMOVE
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}