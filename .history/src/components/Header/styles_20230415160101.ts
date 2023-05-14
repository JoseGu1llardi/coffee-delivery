import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const HeaderButtonsConatiner = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
`;