import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./home"
import Layout from "./Layout"




export const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}