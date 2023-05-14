import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;
    
    > p {
        color: ${({ theme }) => theme.colors["base-error"]};
    }
`;

export const InputStyleContainer = styled.input`
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background: ${({ theme }) => theme.colors["base-input"]};
    transition: .4s;
    
    
    &:focus {
        border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
    
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: .75rem;
    padding: 0 0.75rem;
    
    &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
    }
`;

export const InputStyled = styled.input`
    flex: 1;
    background: none;
    border: none;
    
`;

export const RightText = styled.p`
    font-size: .75rem;
    margin-right: .75rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors["base-label"]};
`;