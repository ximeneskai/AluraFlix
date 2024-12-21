import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NewVideo from "./pages/NewVideo";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newvideo" element={<NewVideo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;