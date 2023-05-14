import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Order } from './pages/Order';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
        </Routes>
    )
}