import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./home"
import Layout from "./Layout"
import { About } from "./About"
import Products from "./Products"
import Contact from "./Contact"




export const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            </Route>
        </Routes>
        </BrowserRouter>
    )
}