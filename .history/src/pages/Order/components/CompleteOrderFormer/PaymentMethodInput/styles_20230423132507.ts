import styled from "styled-components";


export const PaymentMethodContainer = styled.div`
    padding: 0 1rem;
    background: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .75rem;
    font-size: .75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]}};
`;