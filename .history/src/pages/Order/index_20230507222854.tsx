import * as zod from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, FormProvider } from 'react-hook-form';

import { CompleteOrderForme } from "./components/CompleteOrderFormer";

import { SelectedCoffees } from "./components/SelectedCoffees";

import { OrderContainer } from "./styles";

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string(),
});

export function Order() {
    const confirmOrderForm = useForm({
        resolver: zodResolver(confirmOrderFormValidationSchema),
    });

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmOrder(data) {
        console.log(data);
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