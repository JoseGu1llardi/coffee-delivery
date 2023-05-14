import styled from "styled-components";


export const CoffeeCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    
    > div {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    
        img {
            width: 4rem;
            height: 4rem;
        }
    }
`;

export const ActionsContainer = styled.div`
    
`;

export const RemoveButton = styled.button`
    
`;