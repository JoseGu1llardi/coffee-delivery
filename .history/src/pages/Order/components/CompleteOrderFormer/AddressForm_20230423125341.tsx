import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";


export function AddressForm() {
    return (
        <AddressFormContainer>
            <Input placeholder="EIR Code" className="cep" type="number" />
            <Input placeholder="Street" className="street" />
            <Input placeholder="Number" type="number" />
            <Input placeholder="Complement" className="complement" />
            <Input placeholder="District" />
            <Input placeholder="City" />
            <Input placeholder="State" />
        </AddressFormContainer>
    )
}