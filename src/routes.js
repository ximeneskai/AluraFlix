import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NewVideo from "./pages/NewVideo";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/newvideo" element={<NewVideo />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;