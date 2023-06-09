import { ReactNode, createContext, useState } from 'react';

import { produce } from 'immer';

import { Coffee } from '../pages/Home/components/CoffeeCard';

interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}