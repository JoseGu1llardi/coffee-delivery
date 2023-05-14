import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input";

import { AddressFormContainer } from "./styles";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function AddressForm() {
    const { register, formState } = useFormContext();

    const { errors } = formState;

    return (
        <AddressFormContainer>
            <Input
                placeholder="EIR Code"
                className="cep"
                type="number"
                {...register("cep")}
            />

            <Input placeholder="Street" className="street" />
            <Input placeholder="Number" type="number" />
            <Input placeholder="Complement" className="complement" />
            <Input placeholder="District" />
            <Input placeholder="City" />
            <Input placeholder="UF" />
        </AddressFormContainer>
    )
}