import Home from "../Pages/Home.jsx"
import Dictionary from "../Pages/Dictionary.jsx"
import {Routes, Route} from "react-router-dom"

const AllRoutes = () => {
  return (

    
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Dictionary" element={<Dictionary/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes