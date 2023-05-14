import { ReactNode, createContext, useState } from 'react';

import { produce } from 'immer';

import { Coffee } from '../pages/Home/components/CoffeeCard';

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.length;

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex(
            cartItem => cartItem.id === coffee.id
        );

        const newCart = produce(cartItems, draft => {
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee);
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
            }
        });

        setCartItems(newCart);
    }

    function changeCartItemQuantity(cartItemId: number, type: "increase" | "decrease") {
        const newCart = produce(cartItems, draft => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

            if (coffeeExistsInCart >= 0) {

            }

        });
    }

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
            {children}
        </CartContext.Provider>
    )
}