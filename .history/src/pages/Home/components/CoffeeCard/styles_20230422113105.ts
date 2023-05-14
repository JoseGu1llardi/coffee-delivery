import styled from "styled-components";


export const CoffeeCardContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    
    img {
        width: 7.5rem;
        height: 7.5rem;
    }
`;