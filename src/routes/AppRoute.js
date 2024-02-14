import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

function AppRoute() {
    return (
        <Routes>
            <Route>
                <Route path="" element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoute;