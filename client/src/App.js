import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Landing from './pages/Landing';
import Form from './pages/Form';

export default function App() {
    return (
        <main>
            <Header />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </main>
    );
}