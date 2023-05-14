import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Outlet />
        </LayoutContainer>
    )
}