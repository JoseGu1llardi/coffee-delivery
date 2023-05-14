import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;
    
    > h1 {
        ${({ theme }) => theme.colors["brand-yellow-dark"]}
    }
`;