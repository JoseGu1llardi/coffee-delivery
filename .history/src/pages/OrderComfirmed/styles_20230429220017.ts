import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;
    
    h1 {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
    
    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const OrderDetailContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${({ theme }) => theme.colors["base-background"]};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    &::before {
        content: "";
        position: absolute;
        inset: -1px;
    }
`;