import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";


export function ConfirmationSection() {
    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total items</RegularText>
                <RegularText>$ 9.90</RegularText>
            </div>

            <div>
                <RegularText size="s">Delivery</RegularText>
                <RegularText>$ 3.50</RegularText>
            </div>

            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
            </div>
        </ConfirmationSectionContainer>
    )
}