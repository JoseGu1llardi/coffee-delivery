import styled from "styled-components";


export const CoffeeCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    
    > div {
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