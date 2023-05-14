import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";


export function ConfirmationSection() {
    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total items</RegularText>
            </div>
        </ConfirmationSectionContainer>
    )
}