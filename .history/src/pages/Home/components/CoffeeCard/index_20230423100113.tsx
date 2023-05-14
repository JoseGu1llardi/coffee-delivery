import { ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1682899200&Signature=NYnlWctiXy4R1SqW0OUcEqRVx5MwdAlbn9nIMuLyr0YWBTGqcLVxpLoXwVRIIFVFV2pDSBT45UMyx5ZMy2LI3P0hdvFAvPjiOVKJZHEOLYHb2CMofbwzFABQVt3vqRbOQylTDgZ1tdFNu6Fnzj1pTkKc6mlfNOuZt6TF0m-QIeLWsblsmetZm2MoPm8RGz~aicA~9qoriz3pi30kUIAz8044daJuhjAWE7fRx1hTjRpcNDOAIAyGngbecGYIxvfyfMhyQSguXyMXtbZmLS-56vRP6uW7Ry2ijLgVobtc9hd9zyPou95nV5CsGVxGHad5~x~oRwVg2GX1vX56eMHWcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <Tags>
                <span>traditional</span>
                <span>with milk</span>
            </Tags>

            <Name>Traditional Espresso</Name>
            <Description>The traditional coffee made with hot water and ground beans.</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        9,90
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}