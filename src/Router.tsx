import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { OrderConfirmedPage } from './pages/OrderComfirmed';

import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/confirmedOrder' element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}