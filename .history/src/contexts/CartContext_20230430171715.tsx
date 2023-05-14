import { createContext } from 'react';

import { Coffee } from '../pages/Home/components/CoffeeCard';

interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
}

export const CartContext = createContext({} as CartContextType);