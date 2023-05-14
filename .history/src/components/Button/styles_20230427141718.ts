import styled from "styled-components";


export const ButtonContainer = styled.button`
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors["base-white"]};
    font-weight: 700;
    background: ${({ theme }) => theme.colors["brand-yellow"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
`;