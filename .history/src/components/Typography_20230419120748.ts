import styled from "styled-components";

interface TitleTextProps {
    size?: "xl" | "l" | "m" | "s" | "xs";
    color?: "title" | "subtitle" | "text";
}

export const TitleText = styled.h1<TitleTextProps>`
    color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
    font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size ?? "m"}`]}
`;