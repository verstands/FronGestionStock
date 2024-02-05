import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Dashboad from "../pages/Dashboad"
const Routers = () => {
  return (
    <>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Dashboad />} />
            </Route>
        </Routes>
    </>
  )
}

export default Routers