import { createContext, useState } from 'react';

import { Coffee } from '../pages/Home/components/CoffeeCard';

interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}