import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";


const Root = () => {
    

    return (
        <>
            <NavBar />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export default Root;
