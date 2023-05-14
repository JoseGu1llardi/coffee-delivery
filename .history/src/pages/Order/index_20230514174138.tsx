import * as zod from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, FormProvider } from 'react-hook-form';

import { CompleteOrderForme } from "./components/CompleteOrderFormer";

import { SelectedCoffees } from "./components/SelectedCoffees";

import { OrderContainer } from "./styles";
import { useNavigate } from 'react-router-dom';

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    cash = "cash",
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(6, "Enter the EIR Code"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Enter the method of payment" }
        }
    })
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

export function Order() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
    });

    const { handleSubmit } = confirmOrderForm;

    const navigate = useNavigate();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
            state: data
        });
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <OrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForme />
                <SelectedCoffees />
            </OrderContainer>
        </FormProvider>
    )
}