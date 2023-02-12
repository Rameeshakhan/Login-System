import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import Login from "./pages/login"
import Register from "./pages/Register"

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App



