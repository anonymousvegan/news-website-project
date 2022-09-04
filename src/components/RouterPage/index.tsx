import { Route, Routes } from "react-router-dom";
import Home from '../Home'

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<p>  404 </p>} />
        </Routes>
    );
}

export default RouterPage;