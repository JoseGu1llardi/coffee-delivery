import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";


export function ConfirmationSection() {
    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total items</RegularText>
                <RegularText>$ 9.90</RegularText>
            </div>
        </ConfirmationSectionContainer>
    )
}