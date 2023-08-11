import { Routes, Route } from "react-router-dom";
import { useStore } from "./store";

import Landing from "./pages/Landing";
import Form from "./pages/Form";


function App() {
    return (
        <main>
            <Route path="/" element={<Landing />} />
            <Route path="/form" element={< Form />} />
        </main>
    );
}

export default App;