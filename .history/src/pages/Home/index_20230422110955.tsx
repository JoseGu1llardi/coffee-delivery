import { OurCoffees } from "./components/OurCoffees";
import { Intro } from "./components/intro";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}