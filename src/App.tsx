import './App.css'
// @ts-ignore
import CategoriesPage from "./components/categories/CategoriesPage.tsx";
import {Route, Routes} from "react-router-dom";
import CategoryCreatePage from "./components/create";
// @ts-ignore
import ProductListPage from ".//src/components/product/list/ProductListPage.tsx";
function App() {

    return (
        <>
            <Routes>
                <Route path="/" >
                    <Route index element={<CategoriesPage />} />
                    <Route path={"create"} element={<CategoryCreatePage />} />

                    <Route path={"products/:id"}  element={<ProductListPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App