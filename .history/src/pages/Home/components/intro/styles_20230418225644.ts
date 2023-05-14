import styled from "styled-components";

import introBackground from '../../../../assets/intro_background.png';

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
    /* background: ${() => `url(${introBackground}) no-repeat center`};
    background-size: cover; */
    background: red;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;