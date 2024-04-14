import NavList from "./Components/NavList/NavList.jsx"
import Carts from "./Components/Carts/Cart.jsx"
import StoreCart from "./Components/Products/Products.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <>

      <BrowserRouter>
      <NavList />

        <Routes>
          {/* <Route path="/" element={ </>}/> */}
          <Route path="/storeCart" element={ <StoreCart />}/>
          <Route path="/carts" element={ <Carts />}/>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
